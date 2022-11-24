<template>
  <div class="text-center">
    <b-overlay :show="isBusy" z-index="2" rounded>
      <b-button
        v-if="soldOut"
        class="mint-button font-weight-bold border-0"
        :disabled="!$siteConfig.marketplaceURL"
        :href="$siteConfig.marketplaceURL"
        target="_blank"
      >SOLD OUT
      </b-button
      >
      <b-button
        v-else-if="!isConnected"
        class="mint-button font-weight-bold border-0"
        @click="connect"
      >
        {{ buttonText }}
							<b-img :src="require(`~/assets/img/header/${buttonImg}.svg`)"/>
      </b-button
      >
      <b-dropdown
        v-else-if="isConnected && isMetaMask && !isMobile"
        split
        block
        split-class="split-mint-button font-weight-bold border-0"
        menu-class="w-100 text-center"
        toggle-class="split-mint-toggle"
        :text="`Mint [${mintCount}]`"
        @click="mintWithCrypto">
        <b-dropdown-item @click="reconnectMetamask"
        >Select Different Wallet
        </b-dropdown-item
        >
        <b-dropdown-item @click="disconnectConnectedWallet"
        >Disconnect
        </b-dropdown-item
        >
      </b-dropdown>

			<b-button
				v-else
				class="mint-button border-0"
				@click="mintWithCrypto"
				>Mint [{{ mintCount }}]</b-button
			>
			<b-button
				v-if="isConnected"
				class="mint-button font-weight-bold border-0 mt-2"
				@click="mintWithWert"
				>Pay with wert</b-button
			>
		</b-overlay>
		<b-alert
			:show="message.show || !!message.text"
			:variant="message.variant"
			dismissible
			@dismissed="message = {}"
			class="mt-2">
			{{ message.text }}
		</b-alert>
		<b-button
			v-if="$route.name === 'button'"
			variant="link"
			class="mt-2 text-decoration-none"
			:disabled="isBusy"
			v-show="isConnected"
			@click="disconnectConnectedWallet"
			>Disconnect Wallet</b-button
		>
		<TweetModal
			:images="mintedTokens"
			:mintCount="mintCount"
			@hidden="handleTweetModalHide"></TweetModal>
	</div>
</template>

<script>
import WertWidget from '@wert-io/widget-initializer'
import Web3 from 'web3'
import {signSmartContractData} from '@wert-io/widget-sc-signer'
import {v4 as uuidv4} from 'uuid'
import {Buffer} from 'buffer'
import {ethers} from 'ethers'
import {wait} from '@/utils'
import {ANALYTICS_EVENTS, SALE_STATUS} from '@/constants'
import {useOnboard} from '@web3-onboard/vue'
import {computed, ref, watch} from '@vue/composition-api'
import {mapMutations} from 'vuex'
import isMobile from '../hooks/isMobile'

export default {
	props: {
		soldOut: Boolean,
		buttonText:{
				type:String,
			 default: 'Connect Wallet'
		},
		buttonImg:{
			type:String,
			default: ''
		},
		mintCount: {
			type: Number,
			default: 1,
		},
	},
	setup(_, { root }) {
		const mintedTokens = ref([])
		const { name: smartContractName, chainId } = root.$siteConfig.smartContract
		const hexChainId = `0x${chainId.toString(16)}`

    const {
      connectedWallet,
      connectedChain,
      connectingWallet,
      connectWallet,
      setChain,
      disconnectConnectedWallet,
    } = useOnboard()
    const isMinting = ref(false)
    const message = ref({})
    const isBusy = computed(() => isMinting.value || connectingWallet.value)
    const isConnected = computed(() => connectedWallet.value !== null)
    const isMetaMask = computed(() => connectedWallet.value?.label === 'MetaMask')
    const walletAddress = computed(
      () => connectedWallet.value?.accounts[0]?.address
    )
    const walletProvider = computed(
      () =>
        new ethers.providers.Web3Provider(connectedWallet.value?.provider, 'any')
    )

    function reconnectMetamask() {
      walletProvider.value
        .send('wallet_requestPermissions', [{eth_accounts: {}}])
        .catch(console.error)
    }

    // const accountCenter$ = root.$onboard.state.select('accountCenter')
    // const { unsubscribe: unsubscribeAC } = accountCenter$.subscribe(
    // 	async ({expanded}) => {
    // 		console.log(expanded)
    // 		if(expanded) {
    // 			const { label, accounts } = connectedWallet.value
    // 			if(label === 'MetaMask' && accounts?.length > 0) {

    // 				const permissions = await walletProvider.value.send('wallet_getPermissions')
    // 				const { value: connectedMMWallets } = permissions[0].caveats.find(x => x.type === 'restrictReturnedAccounts')
    // 				console.log(connectedWallet.value, connectedMMWallets)
    // 				root.$onboard.state.actions.updateWallet(label, { // updateWallet is not exposed
    // 					accounts: accounts.filter(a => connectedMMWallets.includes(a.address))
    // 				})
    // 			}
    // 		}
    // 	}
    // )

    watch(connectedWallet, async (newVal, oldVal) => {
      // connected wallet emits twice hence this check
      try {
        const isRedundant =
					newVal?.label === oldVal?.label &&
					JSON.stringify(newVal?.accounts) === JSON.stringify(oldVal?.accounts)

        if (!newVal || isRedundant) return

        const {label, accounts} = newVal

        if (label === 'MetaMask') {
          const [{address: primaryWallet}] = accounts
          const [activeWallet] = await walletProvider.value.listAccounts()

          // console.log({
          // 	primaryWallet,
          // 	activeWallet,
          // })

          const normalizedPrimaryWallet = ethers.utils.getAddress(primaryWallet)
          const noramlizedActiveWallet = ethers.utils.getAddress(activeWallet)

          const permissions = await walletProvider.value.send(
            'wallet_getPermissions'
          )
          const {value: connectedMMWallets} = permissions[0].caveats.find(
            (x) => x.type === 'restrictReturnedAccounts'
          )

          const isConnectedInMM =
						connectedMMWallets
						  .map((a) => ethers.utils.getAddress(a))
						  .find((a) => a === normalizedPrimaryWallet) !== undefined

          const isActive = normalizedPrimaryWallet === noramlizedActiveWallet

          const shouldRequest = !isConnectedInMM || !isActive

          if (shouldRequest) {
            await walletProvider.value.send('wallet_requestPermissions', [
              {eth_accounts: {}},
            ])
          }
        }
      } catch (e) {
        console.error(e)
      }
    })

    const checkChain = async () => {
      if (connectedChain.value?.id !== hexChainId) {
        await setChain({
          chainId: hexChainId,
        })
        await wait(1000) // to allow chains to properly switch
      }
      return connectedChain.value?.id === hexChainId
    }

    const connect = async () => {
      await connectWallet()
      if (isConnected.value) {
        root.$gtag('event', ANALYTICS_EVENTS.WalletConnected, {
          smartContractName,
          walletAddress: `address_${walletAddress.value}`, // prefix address_ cause gtag converts hex address into digits
        })
        await checkChain()
      }
    }
    return {
      isBusy,
      isConnected,
      isMinting,
      message,
      walletAddress,
      walletProvider,
      connectedWallet,
      connectedChain,
      connectingWallet,
      connect,
      checkChain,
      disconnectConnectedWallet,
      reconnectMetamask,
      isMetaMask,
      mintedTokens,
      isMobile,
    }
  },
  methods: {
    ...mapMutations(['setBusy']),
    async getWL() {
      let {id, whitelist} = this.$siteConfig.smartContract
      try {
        const {data} = await this.$axios.get(`/smartcontracts/${id}/whitelist`)
        whitelist = data
      } catch {
      }

      return whitelist
    },
    async mintWithWert() {
      window.Buffer = Buffer
      const {name: smartContractName, address: scAddress} =
				this.$siteConfig.smartContract
      this.message = {}
      try {
        const success = await this.checkChain()
        if (!success) {
          throw new Error('Chain switch request failed')
        }

        this.isMinting = true

        const saleStatus = await this.$smartContract.saleStatus()

        this.$gtag('event', ANALYTICS_EVENTS.CheckoutBegin, {
          name: smartContractName,
          walletAddress: `address_${this.walletAddress}`, // prefix address_ cause gtag converts hex address into digits
          saleStatus: SALE_STATUS[saleStatus],
          quantity: this.mintCount,
        })

        const signedContract = this.$smartContract.connect(
          this.walletProvider.getSigner()
        )
        const total = await signedContract.calcTotal(this.mintCount)
        const web3 = new Web3(window.ethereum)
        const sc_input_data = web3.eth.abi.encodeFunctionCall(
          {
            inputs: [
              {
                internalType: 'uint256',
                name: 'count',
                type: 'uint256',
              },
            ],
            name: 'mint',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
          },
          [this.mintCount]
        )
        const privateKey = this.$config.WERT_PRIVATE_KEY
        const signedData = signSmartContractData(
          {
            address: this.walletAddress,
            commodity: 'ETH',
            commodity_amount: ethers.utils.formatEther(total),
            pk_id: 'key1',
            sc_address: scAddress,
            sc_id: uuidv4(),
            sc_input_data,
          },
          privateKey
        )
        const otherWidgetOptions = {
          partner_id: this.$config.WERT_PARTNER_ID,
          origin: 'https://sandbox.wert.io',
          click_id: uuidv4(),
          listeners: {
            'loaded': () => {
              this.isMinting = true
            },
            'error': (err) => {
              console.log('err: ', err)
              const {message = null} = err
              if (message) {
                console.log('message: ', message)
                this.message = {
                  variant: 'error',
                  text: message,
                }
              }
              this.isMinting = false
            },
            'payment-status': (payload) => {
              console.log('payload: ', payload)
              switch (payload.status) {
              case ('failed', 'canceled'):
                this.message = {
                  variant: 'danger',
                  text: 'Transaction Failed',
                }
                this.isMinting = false
                break
              case 'success':
                this.message = {
                  variant: 'success',
                  text: 'Mint confirmed! 🎉',
                  show: 10,
                }
                this.isMinting = false
                break
              }
            },
          },
        }
        const nftOptions = {
          extra: {
            item_info: {
              author: 'vFootballs',
              author_image_url:
								'https://www.citypng.com/public/uploads/preview/world-cup-trophy-hd-png-11649280868xrfincwcil.png',
              image_url:
								'https://www.citypng.com/public/uploads/preview/world-cup-trophy-hd-png-11649280868xrfincwcil.png',
              name: 'vFootballs NFT',
              seller: 'vFootballs',
            },
          },
        }
        const wertWidget = new WertWidget({
          ...signedData,
          ...otherWidgetOptions,
          ...nftOptions,
        })
        console.log('wertWidget: ', wertWidget)
        wertWidget.open()
      } catch (err) {
        console.error(err, err.message)

        if (!err || err.message === 'JSON RPC response format is invalid') {
          return
        }

        const {data, reason, message, error} = err
        const text =
					reason || message || error?.message || data?.message || 'Minting failed'

        this.message = {
          variant: 'danger',
          text,
        }

        this.$gtag('event', ANALYTICS_EVENTS.CheckoutError, {
          name: smartContractName,
          walletAddress: `address_${this.walletAddress}`, // prefix address_ cause gtag converts hex address into digits
          message: text,
        })
      } finally {
        this.isMinting = false
        this.setBusy({isBusy: false})
      }
    },
    async mintWithCrypto() {
      const {name: smartContractName} = this.$siteConfig.smartContract

      this.message = {}

      try {
        const success = await this.checkChain()
        console.log('success: ', success)
        if (!success) {
          throw new Error('Chain switch request failed')
        }

        this.isMinting = true

        const saleStatus = await this.$smartContract.saleStatus()
        console.log('saleStatus: ', saleStatus)

        this.$gtag('event', ANALYTICS_EVENTS.CheckoutBegin, {
          name: smartContractName,
          walletAddress: `address_${this.walletAddress}`, // prefix address_ cause gtag converts hex address into digits
          saleStatus: SALE_STATUS[saleStatus],
          quantity: this.mintCount,
        })

        let txResponse

        const signedContract = this.$smartContract.connect(
          this.walletProvider.getSigner()
        )

        const total = await signedContract.calcTotal(this.mintCount)
        console.info({
          total: ethers.utils.formatEther(total),
        })

        const txOverrides = {
          value: total.toString(),
        }

        const provider = this.$smartContract.provider

        const {baseFeePerGas = ethers.BigNumber.from('0')} =
					await provider.getBlock('latest')
        // console.info(block, baseFeePerGas)

        // const feeData = await provider.getFeeData()
        // console.log(feeData)

        // const{ gasPrice, maxFeePerGas, maxPriorityFeePerGas } = feeData
        // console.info({
        // 	baseFeePerGas: ethers.utils.formatUnits(baseFeePerGas, 'gwei'),
        // 	gasPrice: ethers.utils.formatUnits(gasPrice, 'gwei'),
        // 	maxFeePerGas: ethers.utils.formatUnits(maxFeePerGas, 'gwei'),
        // 	maxPriorityFeePerGas: ethers.utils.formatUnits(maxPriorityFeePerGas, 'gwei')
        // })

        // EIP-1559 support check
        if (baseFeePerGas.toNumber() === 0) {
          console.info('EIP-1559 not supported, using gasPrice instead')
          txOverrides.gasPrice = await provider.getGasPrice()
        }

        txResponse = await signedContract.mint(this.mintCount, txOverrides)

        console.log({txResponse})

        this.$gtag('event', ANALYTICS_EVENTS.CheckoutComplete, {
          name: smartContractName,
          walletAddress: `address_${this.walletAddress}`, // prefix address_ cause gtag converts hex address into digits
          saleStatus: SALE_STATUS[saleStatus],
          quantity: this.mintCount,
          total: ethers.utils.parseEther(txOverrides.value),
        })

        this.message = {
          variant: 'success',
          text: 'Transaction accepted!',
          show: 5,
        }

        const txReceipt = await txResponse.wait()
        this.message = {
          variant: 'success',
          text: 'Mint confirmed! 🎉',
          show: 10,
        }
        await this.$onboard.state.actions.updateBalances([this.walletAddress])
        let events = txReceipt.events.slice(0, 3)
        this.setBusy({isBusy: true})
        const tokenURIPromises = events.map((e) =>
          signedContract.tokenURI(e.args.tokenId)
        )
        const tokenURIs = await Promise.all(tokenURIPromises)

        const metadataPromises = tokenURIs.map((uri) =>
          fetch('https://ipfs.io/ipfs/' + uri.replace('ipfs://', ''))
        )
        const metadataResponses = await Promise.all(metadataPromises)

        for (const res of metadataResponses) {
          if (!res.ok) {
            console.log(res.statusText)
            return
          }
          const json = await res.json()
          this.mintedTokens.push({
            name: json.name,
            imageSrc: 'https://ipfs.io/ipfs/' + json.image.replace('ipfs://', ''),
          })
        }
        this.setBusy({isBusy: false})
        this.$bvModal.show('TwitterNftShareModal')
        this.$confetti.start({
          particles: [{type: 'rect'}],
        })
      } catch (err) {
        console.error(err, err.message)

        if (!err || err.message === 'JSON RPC response format is invalid') {
          return
        }

        const {data, reason, message, error} = err
        const text =
					reason || message || error?.message || data?.message || 'Minting failed'

        this.message = {
          variant: 'danger',
          text,
        }

        this.$gtag('event', ANALYTICS_EVENTS.CheckoutError, {
          name: smartContractName,
          walletAddress: `address_${this.walletAddress}`, // prefix address_ cause gtag converts hex address into digits
          message: text,
        })
      } finally {
        this.isMinting = false
        this.setBusy({isBusy: false})
      }
    },
    handleTweetModalHide() {
      this.$confetti.stop()
      this.mintedTokens = []
    },
  },
}
</script>

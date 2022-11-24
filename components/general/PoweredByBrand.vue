<template>
  <div class="text-center">
    <b-link
      class="text-muted zerocode-link text-monospace"
      :href="$appConfig.mainWebsiteURL"
      target="_blank"
      @click.prevent="onLinkClick"
    >
      <slot></slot>
    </b-link>
  </div>
</template>

<script>
import {ANALYTICS_EVENTS} from '@/constants'
import {computed} from '@vue/composition-api'
import {useOnboard} from '@web3-onboard/vue'

export default {
  setup() {
    const {connectedWallet} = useOnboard();
    const walletAddress = computed(
      () => connectedWallet.value?.accounts[0]?.address
    )
    return {walletAddress}
  },
  methods: {
    onLinkClick() {
      const {id, name} = this.$siteConfig.smartContract
      const {gtagId, mainWebsiteURL} = this.$appConfig
      if (gtagId) {
        this.$gtag('event', ANALYTICS_EVENTS.ZeroCodeLinkClicked, {
          name,
          scId: id,
          // prefix address_ cause gtag converts hex address into digits
          walletAddress: `address_${this.walletAddress}`,
        })
      }
      window.open(mainWebsiteURL, '_blank')
    },
  },
}
</script>

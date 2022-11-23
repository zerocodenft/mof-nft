<template>
	<div>
		<b-navbar class="
			d-flex
			align-items-center
			justify-content-between
		" toggleable="lg" type="dark" variant="info">
			<b-navbar-brand href="#">LOGO</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="w-100 d-flex justify-content-center align-items-center">
					<b-nav-item class="text-uppercase text-white" v-for="link in headerLinks" :key="link">{{link}}</b-nav-item>
				</b-navbar-nav>
				<MintButtonWithWert :button-text="'Connect wallet'"></MintButtonWithWert>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
import { copyToClipboard } from '@/utils'
import MintButtonWithWert from "~/components/MintButtonWithWert";
export default {
	data(){
		const headerLinks = ['About', 'Ecosystem', 'Roadmap', 'Team', 'How to buy', 'Faq']
		return { headerLinks }
	},
	components:{MintButtonWithWert},
	methods: {
		copyToClipboard,
		updatePosition(settings) {
			this.$onboard.state.actions.updateAccountCenter({
				...settings,
			})
		},
	},
}
</script>

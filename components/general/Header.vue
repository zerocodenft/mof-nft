<template>
	<div class="header-block container-box mx-auto">
		<b-navbar
			style="z-index: 1"
			class="d-flex align-items-center justify-content-between px-0"
			toggleable="lg"
			type="dark">
			<b-navbar-brand
				active-class="header-block__logo text-white text-uppercase font-weight-bold"
				to="/">
				<b-img width="205px" src="@/assets/img/logos/logo.png"></b-img>
			</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<HeaderNav />
				<!-- <MintButtonWithWert
					:button-img="'wallet'"
					:button-text="'Connect wallet'"></MintButtonWithWert> -->
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
import { copyToClipboard } from '@/utils'
import MintButtonWithWert from '~/components/MintButtonWithWert'
import HeaderNav from '@/components/general/HeaderNav'

export default {
	components: { MintButtonWithWert, HeaderNav },
	data() {
		const headerLinks = [
			{ id: '#about', link: 'About' },
			{ id: '#ecosystem', link: 'Ecosystem' },
			{ id: '#roadmap', link: 'Roadmap' },
			{ id: '#team', link: 'Team' },
			{
				id: '#whitePaper',
				link: 'White Paper',
				isExternal: true,
				url: 'https://mikhail-ryabov.gitbook.io/museum-of-footballs',
			},
		]
		return { headerLinks }
	},
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

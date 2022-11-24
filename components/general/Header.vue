<template>
	<div class="header-block">
		<b-navbar
			class="container mx-auto d-flex align-items-center justify-content-between" toggleable="lg" type="dark">
			<b-navbar-brand class="header-block__logo" href="#">LOGO</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="header-block__links w-100 d-flex justify-content-center align-items-center">
					<b-nav-item class="header-block__link" v-for="link in headerLinks" :key="link">{{ link }}</b-nav-item>
				</b-navbar-nav>
				<MintButtonWithWert :buttonImg="'wallet'" :button-text="'Connect wallet'"></MintButtonWithWert>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>

export default {
	setup() {
		const headerLinks = ['About', 'Ecosystem', 'Roadmap', 'Team', 'How to buy', 'Faq']
		return {headerLinks}
	},
}
</script>

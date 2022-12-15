<template>
	<b-navbar-nav
		class="w-100 d-flex header-block__links justify-content-center align-items-center">
		<template v-for="link in headerLinks">
			<b-nav-item
				v-if="link.isExternal"
				:key="link.id"
				:href="link.url"
				target="_blank"
				link-classes="header-block__link text-white text-uppercase"
				class="text-uppercase text-white">
				{{ link.link }}
			</b-nav-item>
			<b-nav-item
				v-else
				:key="link.id"
				:to="link.id"
				link-classes="header-block__link text-white text-uppercase"
				class="text-uppercase text-white">
				{{ link.link }}
			</b-nav-item>
		</template>
	</b-navbar-nav>
</template>

<script>
export default {
	name: 'HeaderNav',
	setup() {
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
		return {
			headerLinks,
		}
	},
}
</script>

<style scoped></style>

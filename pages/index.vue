<template>
	<main class="main overflow-hidden">
		<HomeWelcome/>
		<HomeBenfits/>
		<HomeAbout/>
		<HomeTeamAndSponsors/>
		<FAQ />
	</main>
</template>

<script>
import HomeWelcome from "~/components/home/welcome/HomeWelcome";
import HomeBenfits from "~/components/home/HomeBenfits";
import HomeAbout from "~/components/home/HomeAbout";
import FAQ from '~/components/home/faq/FAQ'
import HomeTeamAndSponsors from "~/components/home/team-sponsors/HomeTeamAndSponsors";

export default {
	name: 'index',
	components: {
		HomeWelcome,
		HomeBenfits,
		HomeAbout,
		HomeTeamAndSponsors,
		FAQ
	}
}
</script>

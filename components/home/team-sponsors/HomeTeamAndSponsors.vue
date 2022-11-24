<template>
	<section class="container mx-auto">
		<b-row>
			<b-col cols="9">
				<p class="text-white">Team</p>
				<div class="d-flex">
					<div class="d-flex flex-column flex-wrap" v-for="member in teamData">
						<b-img :src="require(`~/assets/img/team-sponsors/${member.imgName}.svg`)" :alt="member.alt"/>
						<p>{{member.name}}</p>
						<p>{{member.describe}}</p>
					</div>
				</div>
			</b-col>
			<b-col cols="3">
				<p class="text-white">Sponsors</p>
			</b-col>
		</b-row>
	</section>
</template>

<script>
export default {
	name: "HomeTeamAndSponsors",
	setup(){
		const teamData = [
			{
				imgName: "first-member",
				alt: "first-member",
				name: "lorem ipsum",
				describe: "lorem ipsum"
			},
			{
				imgName: "second-member",
				alt: "second-member",
				name: "lorem ipsum",
				describe: "lorem ipsum"
			},
			{
				imgName: "third-member",
				alt: "third-member",
				name: "lorem ipsum",
				describe: "lorem ipsum"
			},
			{
				imgName: "fourth-member",
				alt: "fourth-member",
				name: "lorem ipsum",
				describe: "lorem ipsum"
			},
			{
				imgName: "fifth-member",
				name: "lorem ipsum",
				alt: "fifth-member",
				describe: "lorem ipsum"
			},
			{
				imgName: "sixth-member",
				alt: "sixth-member",
				name: "lorem ipsum",
				describe: "lorem ipsum"
			},
		]
		return {teamData}
	}
}
</script>

<style scoped>

</style>

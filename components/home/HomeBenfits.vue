<template>
	<section class="home-benefits container mx-auto">
		<b-row>
			<b-col xl="5" class="align-self-center">
				<h2 class="home-benefits__header">What benefits get the owners of vFootballs NFT?</h2>
				<ul class="home-benefits__list">
					<li class="home-benefits__list-item" v-for="title in listTitles" :key="title">{{title}}</li>
				</ul>
				<b-button class="universal-button">
					mint nft
					<b-img src="~/assets/img/welcome/button-arrows.svg" alt="arrows"></b-img>
				</b-button>
			</b-col>
			<b-col xl="7">
				<b-img class="w-100" src="~/assets/img/benefits/benefits-img.svg" alt="benefits"/>
			</b-col>
		</b-row>
	</section>
</template>

<script>
export default {
	name: "HomeBenfits",
	setup() {
		const listTitles = ["Access to closed community with football superstars and Khabib Nurmagomedov",
			"Football Event Tickets/Raffles for NFT owners only.",
			"Guaranteed Token Allocation in a future token sale.",
			"Holders will start accumulating tokens for the future vGoal in-game purchases.",
			"NFT holders will be receiving free in-game items airdrops.",
			"	NFT will be served as a “premium” subscription to the game.",
			"Marketplace Reduced Fees."]
		return {listTitles}
	}
}
</script>

<style scoped>

</style>

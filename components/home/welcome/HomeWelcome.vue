<template>
	<section class="welcome-block container-fluid mx-auto position-relative">
		<b-img class="position-absolute welcome-block__left-circle" src="~/assets/img/welcome/left-sector-circle.svg" alt="leftCircle"/>
		<b-row class="welcome-block__content flex justify-content-between align-items-center">
			<b-col>
				<div>
					<h1 class="welcome-block__title">Welcome to vFootballs!</h1>
					<p class="welcome-block__paragraph my-4">Limited NFT collection sponsored by Khabib Nurmagomedov, featuring iconic
						footballs portraying the same football
						moments that has gifted us the beautiful game.
						Buy vFootballs NFT and get a acsess to closed community with football superstars and Khabib Nurmagomedov</p>
					<b-button class="universal-button">
						Buy nft
						<b-img src="~/assets/img/welcome/button-arrows.svg" alt="arrows"></b-img>
					</b-button>
				</div>
				<HomeWelcomeBenefits :benefitsDataFirstRow="benefitsDataFirstRow" :benefitsDataSecondRow="benefitsDataSecondRow"/>
			</b-col>
			<b-col>
				<b-img class="position-relative welcome-block__balls" src="~/assets/img/welcome/balls.svg" alt="ballsIcons"/>
				<b-img class="position-absolute welcome-block__circle" src="~/assets/img/welcome/blue-circle.svg" alt="circle"/>
				<b-img class="position-absolute welcome-block__right-circle" src="~/assets/img/welcome/right-sector-circle.svg" alt="circle"/>
			</b-col>
		</b-row>
	</section>
</template>

<script>
import HomeWelcomeBenefits from "~/components/home/welcome/HomeWelcomeBenefits";

export default {
	name: "HomeWelcome",
	components: {HomeWelcomeBenefits},
	setup() {
		const benefitsDataFirstRow = [
			{imgSrc: '~/assets/img/welcome/nft.svg', title: 'Only 5000 NFTs'},
			{imgSrc: '~/assets/img/welcome/star.svg', title: 'Access to events with super stars and Khabib'},
		]
		const benefitsDataSecondRow = [
			{imgSrc: '~/assets/img/welcome/allocation.svg', title: 'Token Allocation in vGame tokensale'},
			{imgSrc: '~/assets/img/welcome/ticket.svg', title: 'Football Event Tickets/Raffles'},
		]
		return {benefitsDataFirstRow, benefitsDataSecondRow}
	}
}
</script>

<style scoped>

</style>

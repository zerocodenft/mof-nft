<template>
	<section class="welcome-block mx-auto position-relative overflow-hidden">
		<Header />
		<!--  pink		-->
		<b-img
			class="welcome-block__left-top-circle"
			:src="require('assets/img/welcome/circle.svg')"
			alt="circle" />
		<MBlur
			height="300px"
			width="300px"
			background="#F83FFF"
			blur="200"
			top="150px"
			left="0" />
		<!--  red		-->
		<MBlur
			height="200px"
			width="300px"
			background="#FF0039"
			blur="150"
			top="50px"
			left="20%" />
		<div
			class="position-relative welcome-block__content container-box mx-auto flex justify-content-between align-items-center">
			<div>
				<div class="welcome-block__info">
					<h1
						class="welcome-block__title text-uppercase text-white font-weight-bold">
						LET’S BEGIN!
					</h1>
					<p class="welcome-block__paragraph">
						Football unites billions of people in powerful emotions. Likewise, our goal is to connect football fans around the globe on our unique interactive platform, transcending borders between nations and clubs.
					</p>
					<p class="welcome-block__paragraph">
						To celebrate the 2022 FIFA World Cup, we are launching an exclusive collection of NFTs that features iconic footballs portraying the same moments which have gifted us the beautiful game.
					</p>
					<p class="welcome-block__paragraph">
						We value our early adopters and want to make sure that more people can join Museum of Footballs community; hence, we are excited to announce that our first NFT collection will be a free mint. NFT holders will have access to online events in our Metaverse and future benefits in the Play-to-Earn game. 
					</p>
					<p class="welcome-block__paragraph">
						Mint vFootballs NFT to get access to the global community of football fans and stay tuned for more!
					</p>
					<HomeCountdown />
					<div class="d-flex">
						<MintButtonWithWert
							:button-img="'wallet'"
							:button-text="'Connect wallet'"></MintButtonWithWert>
					</div>
				</div>
				<HomeWelcomeBenefits
					:benefits-data-first-row="benefitsDataFirstRow"
					:benefits-data-second-row="benefitsDataSecondRow" />
			</div>
			<div class="position-absolute test">
				<b-img
					class="position-relative first_ball welcome-block__balls"
					src="~/assets/img/welcome/index-ball-1.png"
					alt="ballsIcons" />
				<b-img
					class="position-relative second_ball welcome-block__balls"
					src="~/assets/img/welcome/index-ball-2.png"
					alt="ballsIcons" />
				<b-img
					class="position-relative third_ball welcome-block__balls"
					src="~/assets/img/welcome/index-ball-3.png"
					alt="ballsIcons" />
			</div>
			<!--		blue		-->
			<MBlur
				height="300px"
				width="300px"
				background="#3936FF"
				blur="200"
				top="500px"
				left="80%" />
			<!--		pink		-->
			<MBlur
				height="300px"
				width="300px"
				background="#F83FFF"
				blur="140"
				top="500px"
				left="90%" />
		</div>
	</section>
</template>

<script>
import HomeWelcomeBenefits from '~/components/home/welcome/HomeWelcomeBenefits'
import MBlur from '~/components/ui/MBlur'
import HomeCountdown from '~/components/home/welcome/HomeCountdown'
import MintButtonWithWert from '~/components/MintButtonWithWert'

export default {
	name: 'HomeWelcome',
	components: {
		HomeWelcomeBenefits,
		MBlur,
		HomeCountdown,
		MintButtonWithWert,
	},
	setup() {
		const benefitsDataFirstRow = [
			{ imgName: 'nft', title: 'Only 5000 NFTs' },
			{ imgName: 'star', title: 'Access to events with super stars and Khabib' },
		]
		const benefitsDataSecondRow = [
			{ imgName: 'allocation', title: 'Token Allocation in vGame tokensale' },
			{ imgName: 'ticket', title: 'Football Event Tickets/Raffles' },
		]
		return { benefitsDataFirstRow, benefitsDataSecondRow }
	},
}
</script>
<style lang="scss" scoped>
.test {
	top: 0;
	right: 20%;
}
.first_ball {
	margin-right: 100px !important;
	top: 100px !important;
	width: clamp(102px, 10vw, 150px);
	@media (max-width: 1024px) {
		margin-right: 65px !important;
	}
}
.second_ball {
	margin-right: -150px !important;
	top: 250px !important;
	width: clamp(145px, 15vw, 207px);
	@media (max-width: 1024px) {
		margin-right: -150px !important;
		top: 225px !important;
	}
}
.third_ball {
	top: 350px !important;
	margin-right: 90px !important;
	width: clamp(12.8rem, 22vw, 18.75rem);
	@media (max-width: 1024px) {
		margin-right: 40px !important;
	}
}
</style>

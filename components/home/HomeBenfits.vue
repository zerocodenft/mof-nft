<template>
	<section class="home-benefits container-box mx-auto position-relative">
		<div class="home-benefits__wrapper">
			<h2 class="home-benefits__header">
				WHAT ARE THE BENEFITS FOR NFT HOLDERS?
			</h2>
			<div class="home-benefits__cards">
				<div
					v-for="(card, index) in paragraphData"
					:key="index"
					class="home-benefits__content">
					<img :src="require(`~/assets/img/benefits/${card.img}`)" alt="img" />
					<p>
						<span
							v-for="(text, index) in card.title"
							:key="index"
							:class="
								text.standard
									? 'home-benefits__title'
									: 'home-benefits__bold-title'
							">
							{{ text.data }}
						</span>
					</p>
				</div>
			</div>
		</div>
		<div class="home-benefits__poster position-absolute">
			<b-img
				class="home-benefits__image"
				src="~/assets/img/benefits/benefits-img.png"
				alt="benefits" />
		</div>
	</section>
</template>

<script>
import MBlur from '@/components/ui/MBlur'

export default {
	name: 'HomeBenfits',
	components: {
		MBlur,
	},
	setup() {
		const paragraphData = [
			{
				title: [
					{ data: 'Access to closed ', standard: true },
					{ data: 'community with football superstars', standard: false },
				],
				img: 'accessibility.png',
			},
			{
				title: [
					{ data: 'Football Event ', standard: true },
					{ data: 'Tickets/Raffles', standard: false },
					{ data: ' for ', standard: true },
					{ data: 'NFT owners only', standard: false },
				],
				img: 'ticket.svg',
			},
			{
				title: [
					{
						data: 'Guaranteed Token Allocation in a future token sale',
						standard: true,
					},
				],
				img: 'nft.svg',
			},
			{
				title: [
					{
						data: 'Holders will start accumulating tokens for the future ',
						standard: true,
					},
					{ data: 'vGoal ', standard: false },
					{ data: 'in-game purchases', standard: true },
				],
				img: 'tokenization.png',
			},
			{
				title: [
					{
						data: 'NFT holders will be receiving free in-game items airdrops',
						standard: true,
					},
				],
				img: 'free.png',
			},
			{
				title: [
					{ data: 'NFT ', standard: false },
					{ data: 'will be served as a ', standard: true },
					{ data: 'subscription to the game', standard: false },
					{ data: ' Marketplace Reduced Fees.', standard: true },
				],
				img: 'discount.png',
			},
		]
		return { paragraphData }
	},
}
</script>
<style scoped lang="scss">
.home-benefits__poster {
	max-width: 800px;
	top: 50%;
	transform: translateY(-50%);
}

@media (max-width: 1180px) {
	.home-benefits__poster {
		top: 30%;
    max-width: 600px;
    transform: none;
	}
}
@media (max-width: 600px) {
	.home-benefits__poster {
		top: 0%;
    transform: none;
	}
  .home-benefits__wrapper{
    margin-top: 250px;
  }
}
</style>

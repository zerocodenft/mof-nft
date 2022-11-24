<template>
	<div class="welcome-benefits-block d-flex">
		<div class="d-flex flex-column">
			<div v-for="benefit in benefitsDataFirstRow" :key="benefit.title">
				<div class="d-flex">
					<b-img class="welcome-benefits-block__image" :src="require(`~/assets/img/welcome/${benefit.imgName}.svg`)" alt="img"/>
					<p class="welcome-benefits-block__paragraph mb-0">{{ benefit.title }}</p>
				</div>
			</div>
		</div>
		<div class="d-flex flex-column">
			<div v-for="benefit in benefitsDataSecondRow" :key="benefit.title">
				<div class="d-flex">
					<b-img class="welcome-benefits-block__image" :src="require(`~/assets/img/welcome/${benefit.imgName}.svg`)" alt="img"/>
						<p class="welcome-benefits-block__paragraph mb-0">{{ benefit.title }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HomeWelcomeBenefits",
	props: {
		benefitsDataFirstRow: {
			type: Array,
			default: () => []
		},
		benefitsDataSecondRow: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style scoped>

</style>

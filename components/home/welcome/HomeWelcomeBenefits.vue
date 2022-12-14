<template>
  <div class="welcome-benefits">
    <div
      v-for="item in benefits"
      :key="item.id"
      class="d-flex align-items-center"
    >
      <b-img
        class="welcome-benefits__image"
        :src="require(`~/assets/img/welcome/${item.imgName}.svg`)"
        alt="img"/>
      <span class="welcome-benefits__title text-white"> {{ item.title }} </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeWelcomeBenefits',
  props: {
    benefitsDataFirstRow: {
      type: Array,
      default: () => []
    },
    benefitsDataSecondRow: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const benefits = [
      {imgName: 'nft', title: 'Only 5000 NFTs'},
      {imgName: 'star', title: 'Access to events with superstars'},
      {imgName: 'allocation', title: 'Token allocation in vGame tokensale'},
      {imgName: 'ticket', title: 'Football event tickets/raffles'},
    ]
    return {
      benefits
    }
  }

}
</script>


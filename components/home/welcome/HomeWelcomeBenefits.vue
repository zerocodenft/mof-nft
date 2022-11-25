<template>
  <div class="welcome-benefits d-flex">
    <div class="d-flex flex-column justify-content-between welcome-benefits__content">
      <div
        v-for="benefit in benefitsDataFirstRow"
        :key="benefit.title">
        <div class="d-flex  align-items-center">
          <b-img
            class="welcome-benefits__image"
            :src="require(`~/assets/img/welcome/${benefit.imgName}.svg`)"
            alt="img"/>
          <p class="welcome-benefits__paragraph mb-0">{{ benefit.title }}</p>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-between welcome-benefits__content">
      <div
        v-for="benefit in benefitsDataSecondRow"
        :key="benefit.title">
        <div class="d-flex  align-items-center">
          <b-img
            class="welcome-benefits__image"
            :src="require(`~/assets/img/welcome/${benefit.imgName}.svg`)"
            alt="img"/>
          <p class="welcome-benefits__paragraph mb-0">{{ benefit.title }}</p>
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


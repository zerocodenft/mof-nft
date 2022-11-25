<template>
  <section class="welcome-block container mx-auto position-relative">
    <b-row class="welcome-block__content flex justify-content-between align-items-center">
      <b-col>
        <div>
          <h1 class="welcome-block__title text-uppercase text-white font-weight-bold">Welcome to vFootballs!</h1>
          <p class="welcome-block__paragraph my-4">Limited NFT collection sponsored by Khabib Nurmagomedov, featuring iconic
            footballs portraying the same football
            moments that has gifted us the beautiful game.
            Buy vFootballs NFT and get a acsess to closed community with football superstars and Khabib Nurmagomedov</p>
          <b-button class="universal-button">
            Buy nft
            <b-img
              src="~/assets/img/welcome/button-arrows.svg"
              alt="arrows"></b-img>
          </b-button>
        </div>
        <HomeWelcomeBenefits
          :benefits-data-first-row="benefitsDataFirstRow"
          :benefits-data-second-row="benefitsDataSecondRow"/>
      </b-col>
      <b-col>
        <b-img
          class="position-relative welcome-block__balls"
          src="~/assets/img/welcome/balls.svg"
          alt="ballsIcons"/>
      </b-col>

    </b-row>
  </section>
</template>

<script>
import HomeWelcomeBenefits from '~/components/home/welcome/HomeWelcomeBenefits';

export default {
  name: "HomeWelcome",
  components: {HomeWelcomeBenefits},
  setup() {
    const benefitsDataFirstRow = [
      {imgName: 'nft', title: 'Only 5000 NFTs'},
      {imgName: 'star', title: 'Access to events with super stars and Khabib'},
    ]
    const benefitsDataSecondRow = [
      {imgName: 'allocation', title: 'Token Allocation in vGame tokensale'},
      {imgName: 'ticket', title: 'Football Event Tickets/Raffles'},
    ]
    return {benefitsDataFirstRow, benefitsDataSecondRow}
  }
}
</script>


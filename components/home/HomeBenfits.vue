<template>
  <section class="home-benefits container-box mx-auto position-relative">
    <h2 class="home-benefits__header">What benefits get the owners of vFootballs NFT?</h2>
    <div>
      <div class="home-benefits__cards">
        <div
          v-for="(card, index) in listTitles"
          :key="index"
          class="home-benefits__line">
          <div class="home-benefits__content">
            <div class="home-benefits__card d-flex align-items-center">
              <p class="home-benefits__number mb-0">{{ generateTwoDigits(index + 1) }}</p>
              <p class="home-benefits__title mb-0">{{ card }}</p>
            </div>
          </div>
        </div>
      </div>
      <b-button class="universal-button mt-5">
        MInt NFT
        <b-img
          src="~/assets/img/welcome/button-arrows.svg"
          alt="arrows"></b-img>
      </b-button>
    </div>
    <div class="home-benefits__poster position-absolute">
      <b-img
        class="w-100 home-benefits__image"
        src="~/assets/img/benefits/benefits-img.svg"
        alt="benefits"/>
      <MBlur
        height="300px"
        width="300px"
        background="#F83FFF"
        blur="150"
        top="150px"
        left="90%"
      />
    </div>
  </section>
</template>

<script>
import MBlur from '@/components/ui/MBlur';
import MGradientCard from '@/components/ui/MGradientCard';

export default {
  name: 'HomeBenfits',
  components: {
    MBlur,
    MGradientCard,
  },
  setup() {
    const listTitles = ['Access to closed community with football superstars and Khabib Nurmagomedov',
      'Football Event Tickets/Raffles for NFT owners only.',
      'Guaranteed Token Allocation in a future token sale.',
      'Marketplace Reduced Fees.',
      'Holders will start accumulating tokens for the future vGoal in-game purchases.',
      'NFT holders will be receiving free in-game items airdrops.',
      'NFT will be served as a “premium” subscription to the game.']
    const generateTwoDigits = value => value.toString().padStart(2, '0')
    return {listTitles, generateTwoDigits}
  }
}
</script>


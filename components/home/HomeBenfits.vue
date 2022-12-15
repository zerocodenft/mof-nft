<template>
  <section class="home-benefits container-box mx-auto position-relative">
    <div class="home-benefits__wrapper">
      <h2 class="home-benefits__header">What benefits the owners of vFootballs NFT get?</h2>
      <div class="home-benefits__cards">
        <div
          v-for="(card,index) in paragraphData"
          :key="index"
          class="home-benefits__content">
          <img
            :src="require(`~/assets/img/benefits/${card.img}`)"
            alt="img">
          <p>
            <span
              v-for="(text,index) in card.title"
              :key="index"
              :class="text.standard ? 'home-benefits__title' : 'home-benefits__bold-title'"
            >
              {{text.data}}
            </span>
          </p>
        </div>
      </div>
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

export default {
  name: 'HomeBenfits',
  components: {
    MBlur,
  },
  setup() {
    const paragraphData = [
      {
        title: [
          { data: "Access to closed ", standard: true },
          { data: "community with football superstars", standard: false },
        ],
        img:"accessibility.png",
      },
      {
        title: [
          { data:"Football Event ", standard: true },
          { data:"Tickets/Raffles", standard: false },
          { data:" for ", standard: true },
          { data:"NFT owners only", standard: false },
        ],
        img:"ticket.svg"
      },
      {
        title: [
          {data:"Guaranteed Token Allocation in a future token sale", standard: true}
        ],
        img:"nft.svg"
      },
      {
        title: [
          {data:"Holders will start accumulating tokens for the future ", standard: true},
          {data:"vGoal ", standard: false},
          {data:"in-game purchases", standard: true},
        ],
        img:"tokenization.png"
      },
      {
        title:[
          {data:"NFT holders will be receiving free in-game items airdrops", standard: true}
        ],
        img:"free.png"
      },
      {
        title:[
          {data: "NFT ", standard: false},
          {data: "will be served as a ", standard: true},
          {data: "subscription to the game", standard: false},
          {data: " Marketplace Reduced Fees.", standard: true},
        ],
        img:"discount.png"
      },
    ]
    return { paragraphData}
  }
}
</script>


<template>
  <section class="welcome-block mx-auto position-relative overflow-hidden">
    <Header/>
    <!--  pink		-->
    <b-img
      class="welcome-block__left-top-circle"
      :src="require('assets/img/welcome/circle.svg')"
      alt="circle"/>
    <MBlur
      height="300px"
      width="300px"
      background="#F83FFF"
      blur="200"
      top="150px"
      left="0"
    />
    <!--  red		-->
    <MBlur
      height="200px"
      width="300px"
      background="#FF0039"
      blur="150"
      top="50px"
      left="20%"
    />
    <div class="welcome-block__content container-box mx-auto flex justify-content-between align-items-center">
      <div>
        <div class="welcome-block__info">
          <h1 class="welcome-block__title text-uppercase text-white font-weight-bold">Welcome to vFootballs!</h1>
          <p class="welcome-block__paragraph">Limited NFT collection
            <span class="font-weight-bold">sponsored by Khabib Nurmagomedov</span>
            featuring iconic footballs portraying the
            same football
            moments that has gifted us the beautiful game.
          </p>
          <p class="mt-2 welcome-block__paragraph">
            Buy vFootballs NFT and get
            <span
              class="font-weight-bold">a access to closed community with football superstars and Khabib Nurmagomedov
            </span>
            NFT mint will start:</p>
          <HomeCountdown/>
          <div class="d-flex">
            <b-button class="universal-button">
              Buy nft
              <b-img
                src="~/assets/img/welcome/button-arrows.svg"
                alt="arrows"></b-img>
            </b-button>
            <b-button class="welcome-block__sign-in">
              Sign in Whitelist
            </b-button>
          </div>
        </div>
        <HomeWelcomeBenefits
          :benefits-data-first-row="benefitsDataFirstRow"
          :benefits-data-second-row="benefitsDataSecondRow"
        />

      </div>
      <b-img
        class="position-relative welcome-block__balls"
        src="~/assets/img/welcome/balls-all-new.svg"
        alt="ballsIcons"
      />
      <!--		blue		-->
      <MBlur
        height="300px"
        width="300px"
        background="#3936FF"
        blur="200"
        top="500px"
        left="80%"
      />
      <!--		pink		-->
      <MBlur
        height="300px"
        width="300px"
        background="#F83FFF"
        blur="140"
        top="500px"
        left="90%"
      />
    </div>
  </section>
</template>

<script>
import HomeWelcomeBenefits from '~/components/home/welcome/HomeWelcomeBenefits';
import MBlur from '~/components/ui/MBlur';
import HomeCountdown from '~/components/home/welcome/HomeCountdown';

export default {
  name: 'HomeWelcome',
  components: {
    HomeWelcomeBenefits,
    MBlur,
    HomeCountdown,
  },
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


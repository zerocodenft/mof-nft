<template>
  <client-only>
    <div
      class="project-ecosystem position-relative mt-5">
      <b-button
        class="project-ecosystem__slide slide-prev d-flex align-items-center justify-content-center"
        @click="prevSlide"
      >
        <b-img
          :src="require('assets/img/collect-set/arrow.svg')"
          alt="arrow"
        />
      </b-button>
      <swiper
        ref="mySwiper"
        class="project-ecosystem__swiper"
        :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in projects"
          :key="index"
        >
          <MGradientCard>
            <template #default>
              <div class="project-ecosystem__content d-flex flex-column align-items-center">
                <b-img
                  class="d-block project-ecosystem__logo"
                  :src="require(`assets/img/project-ecosystem/${item.logo}.svg`)"
                  :alt="item.logo"
                />
                <p class="project-ecosystem__title">{{ item.title }}</p>
                <p class="project-ecosystem__subtitle">{{item.subTitle}}</p>
                <p class="project-ecosystem__description">{{ item.description }}</p>
              </div>
            </template>
          </MGradientCard>
        </swiper-slide>
      </swiper>
      <b-button
        class="project-ecosystem__slide slide-next d-flex align-items-center justify-content-center"
        @click="nextSlide"
      >
        <b-img
          :src="require('assets/img/collect-set/arrow.svg')"
          alt="arrow"/>
      </b-button>
    </div>
  </client-only>
</template>

<script>

import {ref} from '@vue/composition-api';
import MGradientCard from '@/components/ui/MGradientCard';

export default {
  name: 'HomeProjectEcosystemSwiper',
  components: {
    MGradientCard
  },
  setup() {
    const mySwiper = ref()
    const swiperOptions = {
      loop: true,
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      },
      centeredSlides: true,
      spaceBetween: 30
    }
    const projects = ref([
      {id: 1, title: 'offline (irl) museum of footballs',subTitle:"IRL football events", description: "The concept of footballs museum in unique. Since 2013, we have accrued an unprecedented collection of football from history's most significant football tournaments, spanning over 1000 balls. More than that, even historical rarity balls since Middle Age era are part of this collection, which has big historical value for the international football community", logo: 'museum'},
      {id: 2, title: 'metaverse vmuseum of footballs', description: 'vMuseum of Footballs is the official source of information on the history of each exhibit and all collection. Also this an additional tool that draws the attention of collectors around the world to our project', logo: 'web'},
      {id: 3, title: 'vfootballs nft collection', subTitle:"launched on Ethereum blockchain", description: "The unique NFT collection will become the sport's most prized Web3 trophy, which will be in the heart of every football fan-a must-have for future generations of football fans worldwide. Owning a piece of footballing history would surely bring back emotions from a tournament and keep them alive forever, but it will also have its significant perks.", logo: 'nft'},
			{id: 4, title: "vgoal play-to-earn game", subTitle: '', description: "vGoal game, as the first blockchain-based football metaverse,gives its user access to manage their club and generate income while playing.In this game, every player or user can actively take part in different methods and earn rewards for their contributions to the ecosystem.", logo: "goggles"},
      {id:5, title: "website catalog with ar technology", subTitle: "", description:"The museum exists off-line, on-line, and as the world's first museum in the Metaverse. Each ball from our collection can not only be viewed, but also touched in 3D and placed anywhere you wish in augmented reality", logo: "controller"}
    ])

    const prevSlide = () => {
      mySwiper.value.$swiper.slidePrev()
    }
    const nextSlide = () => {
      mySwiper.value.$swiper.slideNext()
    }
    return {
      swiperOptions,
      projects,
      mySwiper,
      prevSlide,
      nextSlide,
    }
  }
}
</script>
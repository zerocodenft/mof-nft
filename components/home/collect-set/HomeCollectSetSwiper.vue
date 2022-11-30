<template>
  <client-only>
    <div
      class="swiper-box position-relative mt-5">
      <b-button
        class="swiper-box__slide slide-prev d-flex align-items-center justify-content-center"
        @click="prevSlide"
      >
        <b-img
          :src="require('assets/img/collect-set/arrow.svg')"
          alt="arrow"
        />
      </b-button>
      <swiper
        ref="mySwiper"
        class="collect-swiper"
        :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in balls"
          :key="index"
        >
          <MGradientCard>
            <template #default>
              <div class="collect-swiper__content">
                <b-img
                  class="d-block collect-swiper__ball"
                  :src="require('assets/img/collect-set/ball-1.svg')"
                  alt="ball"
                />
                <div class="collect-swiper__info">
                  <p class="collect-swiper__title">{{ item.title }}</p>
                  <p class="collect-swiper__description">Lorem ipsum dolor sit amet consectetur. Diam a consequat purus id
                    suspendisse
                    quam diam. Sed elementum
                    sollicitudin tristique blandit lacus. Sed etiam consectetur ornare consequat proin orci. Bibendum lacus varius
                    ullamcorper netus.</p>
                  <b-button class="universal-button">
                    See all sets
                    <b-img
                      src="~/assets/img/welcome/button-arrows.svg"
                      alt="arrows"
                    />
                  </b-button>
                </div>
              </div>
            </template>
          </MGradientCard>
        </swiper-slide>
      </swiper>
      <b-button
        class="swiper-box__slide slide-next d-flex align-items-center justify-content-center"
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
  name: 'HomeCollectSetSwiper',
  components: {
    MGradientCard
  },
  setup() {
    const mySwiper = ref()
    const swiperOptions = {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      autoResize: false,
      resizeReInit: true,
    }
    const balls = ref([
      {id: 1, title: 'GOLD BALL'},
      {id: 2, title: 'PREMIUM BALL'},
      {id: 3, title: 'BORNZE BALL'},
    ])

    const prevSlide = () => {
      mySwiper.value.$swiper.slidePrev()
    }
    const nextSlide = () => {
      mySwiper.value.$swiper.slideNext()
    }
    return {
      swiperOptions,
      balls,
      mySwiper,
      prevSlide,
      nextSlide,
    }
  }
}
</script>

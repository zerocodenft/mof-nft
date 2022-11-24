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
        class="swiper"
        :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in balls"
          :key="index"
        >
          <MGradientCard>
            <template #default>
              <div class="swiper__content">
                <b-img
                  class="d-block swiper__ball"
                  :src="require('assets/img/collect-set/ball-1.svg')"
                  alt="ball"
                />
                <div class="swiper__info">
                  <p class="swiper__title">{{ item.title }}</p>
                  <p class="swiper__description">Lorem ipsum dolor sit amet consectetur. Diam a consequat purus id suspendisse
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
    const swiperKey = ref(0)
    const swiperOptions = {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30
    }
    const balls = ref([
      {id: 1, title: 'GOLD BALL'},
      {id: 2, title: 'PREMIUM BALL'},
      {id: 3, title: 'BORNZE BALL'},
    ])

    const prevSlide = () => {
      mySwiper.value.$swiper.slidePrev()
      swiperKey.value++
    }
    const nextSlide = () => {
      mySwiper.value.$swiper.slideNext()
      swiperKey.value++
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

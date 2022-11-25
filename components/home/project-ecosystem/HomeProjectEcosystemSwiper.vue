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
                  alt="ball"
                />
                <p class="project-ecosystem__title">{{ item.title }}</p>
                <p class="project-ecosystem__description">{{ item.description }}</p>
                <b-button class="project-ecosystem__button universal-button">
                  Learn more
                  <b-img
                    src="~/assets/img/welcome/button-arrows.svg"
                    alt="arrows"
                  />
                </b-button>
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
      {id: 1, title: 'vFootballs', description: 'Lorem ipsum dolor sit amet consectetur.', logo: 'logo'},
      {id: 2, title: 'vMuseum', description: 'Lorem ipsum dolor sit amet consectetur.', logo: 'logo'},
      {id: 3, title: 'vGoal', description: 'Lorem ipsum dolor sit amet consectetur.', logo: 'logo'},
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


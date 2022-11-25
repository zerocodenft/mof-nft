<template>
  <client-only>
    <div
      class="running-line position-relative mt-3">
      <swiper
        ref="mySwiper"
        class="running-line__swiper"
        :options="swiperOptions">
        <swiper-slide
          v-for="(_, index) in 10"
          :key="index"
        >
          <MGradientCard>
            <template #default>
              <div class="running-line__content">
                <b-img
                  class="d-block running-line__ball"
                  :src="require('assets/img/collect-set/ball-1.svg')"
                  alt="ball"
                />
              </div>
            </template>
          </MGradientCard>
        </swiper-slide>
      </swiper>
    </div>
  </client-only>
</template>

<script>

import {ref} from '@vue/composition-api';
import MGradientCard from '@/components/ui/MGradientCard';

export default {
  name: 'HomeCollectSetRunningSwiper',
  components: {
    MGradientCard
  },
  setup() {
    const mySwiper = ref()
    const swiperOptions = {
      loop: true,
      autoplay: {
        delay: 500,
        disableOnInteraction: false
      },
      centeredSlides: true,
      allowTouchMove: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      speed: 10000,
    }

    return {
      swiperOptions,
      mySwiper,
    }
  }
}
</script>
<style lang="scss">

.running-line {
	opacity: 0.4;

	&__content {
		padding: 3rem;
	}

	&__ball {
		width: 11rem;
	}

}

.swiper-wrapper {
	transition-timing-function: linear !important;
}

.swiper-slide {
	width: fit-content !important;
}
</style>

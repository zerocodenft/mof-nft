<template>
  <client-only>
    <Swiper
      :options="{
        loop: true,
        slidesPerView: '3',
        spaceBetween: 30,
      }"
    >
      <SwiperSlide/>
      <SwiperSlide/>
      <SwiperSlide/>
      <SwiperSlide/>
      <SwiperSlide/>
      <SwiperSlide/>
      <SwiperSlide/>
      <SwiperSlide/>
      <SwiperSlide/>
      <SwiperSlide/>
    </Swiper>
  </client-only>
</template>

<script>
import MGradientCard from '@/components/ui/MGradientCard';
import {ref} from '@vue/composition-api';


export default {
  name: 'HomeProjectEcosystem',
  components: {
    MGradientCard,
  },
  setup() {
    const ecosystemSwiper = ref()
    const swiperOptions = {
      slidesPerView: 3,
      spaceBetween: 30,
    }
    const projects = ref([
      {id: 1, title: 'vFootballs', description: 'Lorem ipsum dolor sit amet consectetur.', logo: 'logo'},
      {id: 2, title: 'vMuseum', description: 'Lorem ipsum dolor sit amet consectetur.', logo: 'logo'},
      {id: 3, title: 'vGoal', description: 'Lorem ipsum dolor sit amet consectetur.', logo: 'logo'},
    ])

    const prevSlide = () => {
      ecosystemSwiper.value.$swiper.slidePrev()
    }
    const nextSlide = () => {
      ecosystemSwiper.value.$swiper.slideNext()
    }
    return {
      swiperOptions,
      ecosystemSwiper,
      projects,
      prevSlide,
      nextSlide,
    }
  }
};
</script>

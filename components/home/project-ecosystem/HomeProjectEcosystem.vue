<template>
  <client-only>
    <Swiper
      :options="{
        loop: true,
        slidesPerView: '3',
        spaceBetween: 30,
      }"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      <SwiperSlide>Slide 10</SwiperSlide>
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

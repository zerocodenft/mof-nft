<template>
  <div class="roadmap-swiper">
    <div class="roadmap-swiper__wrapper">
      <!-- Timeline -->
      <HomeRoadmapLine
        class="roadmap-swiper__pagination"
        :tabs="tabs.items"
        @changeTab="changeTab"
      />

      <!-- Swiper -->
      <swiper
        ref="mySwiper"
        class="roadmap-swiper overflow-hidden"
        :options="swiperOptions">
        <swiper-slide
          v-for="(tab, index) in swiperSlides"
          :key="index"
        >
          <component :is="tab"/>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import {ref} from '@vue/composition-api';
import RoadmapFirstTab from '~/components/home/roadmap/tabs/RoadmapFirstTab';
import RoadmapSecondTab from '~/components/home/roadmap/tabs/RoadmapSecondTab';
import RoadmapThirdTab from '~/components/home/roadmap/tabs/RoadmapThirdTab';
import RoadmapFifthTab from '~/components/home/roadmap/tabs/RoadmapFifthTab';
import RoadmapFourthTab from '~/components/home/roadmap/tabs/RoadmapFourthTab';

export default {
  name: 'HomeRoadmapSwiper',
  components: {
    RoadmapFirstTab,
    RoadmapSecondTab,
    RoadmapThirdTab,
    RoadmapFifthTab,
    RoadmapFourthTab
  },
  setup() {
    const mySwiper = ref()
    const swiperSlides = ref(['RoadmapFirstTab', 'RoadmapSecondTab', 'RoadmapThirdTab', 'RoadmapFifthTab', 'RoadmapFourthTab'])
    const swiperOptions = ref({
      autoHeight: true,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
      },
      allowTouchMove: false,
      slidesPerView: '1',
      loop: false,
      effect: 'slide',
      spaceBetween: 30,
    });

    const tabs = ref({
      active: 'RoadmapFirstTab',
      items: [
        {
          active: true,
          title: 'Q3',
          subTitle: '2018',
          componentName: 'RoadmapFirstTab'
        },
        {
          active: false,
          title: 'Q4',
          subTitle: '2020',
          componentName: 'RoadmapSecondTab'
        },
        {
          active: false,
          title: 'Q1',
          subTitle: '2023',
          componentName: 'RoadmapThirdTab'
        },
        {
          active: false,
          title: 'Q2',
          subTitle: '2023',
          componentName: 'RoadmapFourthTab'
        },
        {
          active: false,
          title: 'Q3',
          subTitle: '2023',
          componentName: 'RoadmapFifthTab'
        },
      ]
    })
    const changeTab = (componentName, index) => {
      tabs.value.active = componentName
      tabs.value.items.forEach((item) => item.active = false)
      tabs.value.items[index].active = true
      mySwiper.value.$swiper.slideTo(index)
    }
    return {
      swiperOptions,
      mySwiper,
      swiperSlides,
      tabs,
      changeTab
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <section
    id="roadmap"
    class="roadmap-wrapper container mx-auto position-relative overflow-hidden">
    <h2 class="roadmap-wrapper__header text-white text-uppercase font-weight-bold">Roadmap</h2>
    <HomeRoadmapLine
      :tabs="tabs.items"
      @changeTab="changeTab"/>
    <transition
      name="slide-fade"
      mode="out-in"
    >
      <component :is="tabs.active"/>
    </transition>
  </section>
</template>

<script>
import HomeRoadmapLine from '@/components/home/roadmap/HomeRoadmapLine';
import RoadmapFirstTab from '~/components/home/roadmap/tabs/RoadmapFirstTab';
import RoadmapSecondTab from '~/components/home/roadmap/tabs/RoadmapSecondTab';
import RoadmapThirdTab from '~/components/home/roadmap/tabs/RoadmapThirdTab';
import RoadmapFifthTab from '~/components/home/roadmap/tabs/RoadmapFifthTab';
import RoadmapFourthTab from '~/components/home/roadmap/tabs/RoadmapFourthTab';
import {ref} from '@vue/composition-api';

export default {
  name: 'HomeRoadmap',
  components: {RoadmapFirstTab, RoadmapSecondTab, RoadmapThirdTab, RoadmapFourthTab, RoadmapFifthTab, HomeRoadmapLine},
  setup() {
    const active = true
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
    }
    return {tabs, changeTab, active}
  }
}
</script>

<style lang="scss">
.slide-fade-enter-active {
	transition: all .2s ease;
}

.slide-fade-leave-active {
	transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */
{
	transform: translateX(10px);
	opacity: 0;
}

$delay: 100ms;
$delayStep: 100ms;

.fade-enter,
.fade-leave-to {
	& > * {
		opacity: 0;
		transform: translateY(40px);
	}
}

.fade-enter-active {
	& > * {
		&:nth-child(2) {
			transition-delay: 100ms;
		}

		&:nth-child(3) {
			transition-delay: 200ms;
		}
	}
}

$delay: 100ms;
$delayStep: 100ms;
.fade-leave-active {
	& > * {
		&:nth-child(1) {
			transition-delay: 200ms;
		}

		&:nth-child(2) {
			transition-delay: 100ms;
		}
	}
}
</style>

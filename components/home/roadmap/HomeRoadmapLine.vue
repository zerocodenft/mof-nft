<template>
  <div class="w-100 position-relative roadmap-line">
    <div class="d-flex w-100 position-absolute roadmap-line-circles">
      <div
        v-for="(item,index) in tabs"
        :key="index"
        class="position-relative">
        <transition name="fade">
          <HomeRoadmapLineItem
            :index="index"
            :item="item"
            @changeTab="changeTab"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import RoadmapActiveCircle from '~/components/home/roadmap/circles/RoadmapActiveCircle';
import RoadmapDefaultCircle from '~/components/home/roadmap/circles/RoadmapDefaultCircle';
import HomeRoadmapLineItem from '@/components/home/roadmap/HomeRoadmapLineItem';

export default {
  name: 'RoadmapLine',
  components: {RoadmapDefaultCircle, RoadmapActiveCircle, HomeRoadmapLineItem},
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  emits: ['changeTab'],
  setup(_, {emit}) {
    const changeTab = (componentName, index) => {
      emit('changeTab', componentName, index)
    }
    return {changeTab}
  }
}
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>

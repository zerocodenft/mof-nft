<template>
  <div class="w-100 position-relative roadmap-line">
    <div class="d-flex w-100 position-absolute roadmap-line-circles">
      <div
        v-for="(item,index) in tabs"
        :key="index">
        <component
          :is="item.active ? 'RoadmapActiveCircle' : 'RoadmapDefaultCircle'"
          :index="index"
          :item="item"
          @changeTab="changeTab"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RoadmapActiveCircle from '~/components/home/roadmap/circles/RoadmapActiveCircle';
import RoadmapDefaultCircle from '~/components/home/roadmap/circles/RoadmapDefaultCircle';

export default {
  name: 'RoadmapLine',
  components: {RoadmapDefaultCircle, RoadmapActiveCircle},
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
</style>

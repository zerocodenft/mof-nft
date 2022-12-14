<template>
  <section
    id="roadmap"
    class="roadmap-wrapper container-box mx-auto position-relative overflow-hidden">
    <h2 class="roadmap-wrapper__header text-white text-uppercase font-weight-bold">Roadmap</h2>
    <HomeRoadmapSwiper/>
  </section>
</template>

<script>
import HomeRoadmapSwiper from '@/components/home/roadmap/HomeRoadmapSwiper';

export default {
  name: 'HomeRoadmap',
  components: {
    HomeRoadmapSwiper
  },
  setup() {
    const active = true
    return {active}
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

.slide-fade-enter, .slide-fade-leave-to {
	transform: translateX(10px);
	opacity: 0;
}
.list-move,
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

.list-leave-active {
	position: absolute;
}
</style>

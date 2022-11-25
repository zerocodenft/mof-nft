<template>
  <div
    id="ecosystem"
    class="project-ecosystem__wrapper container overflow-hidden"
  >
    <p class="project-ecosystem__head text-center">Project Ecosystem</p>
    <HomeProjectEcosystemSwiper/>
  </div>
</template>

<script>
import HomeProjectEcosystemSwiper from '~/components/home/project-ecosystem/HomeProjectEcosystemSwiper';

export default {
  name: 'HomeProjectEcosystem',
  components: {
    HomeProjectEcosystemSwiper
  },
  setup() {
    return {}
  }
}
</script>

<style scoped>

</style>

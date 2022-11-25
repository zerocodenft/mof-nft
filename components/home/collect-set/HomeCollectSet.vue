<template>
  <div class="collect-set">
    <h2 class="container mx-auto collect-set__title text-center">
      Collect set of the balls and get special reward -
      unique NFT which you can change to real gold ball.
    </h2>
    <div>
      <HomeCollectSetSwiper class="collect__swiper"/>
      <HomeCollectSetRunningSwiper/>
    </div>
  </div>
</template>

<script>
import HomeCollectSetSwiper from '@/components/home/collect-set/HomeCollectSetSwiper';
import HomeCollectSetRunningSwiper from '@/components/home/collect-set/HomeCollectSetRunningSwiper';

export default {
  name: 'HomeCollectSet',
  components: {
    HomeCollectSetSwiper,
    HomeCollectSetRunningSwiper
  },
  setup() {
    return {}
  }
}
</script>

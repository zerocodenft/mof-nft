<template>
  <div class="collect-set">
    <h2 class="collect-set__title text-center">
      Collect set of the balls and get special reward -
      unique NFT which you can change to real gold ball.
    </h2>
    <div>
      <HomeCollectSetSwiper class="collect__swiper"/>
    </div>
  </div>
</template>

<script>
import HomeCollectSetSwiper from '@/components/home/collect-set/HomeCollectSetSwiper';

export default {
  name: 'HomeCollectSet',
  components: {
    HomeCollectSetSwiper
  },
  setup() {
    return {}
  }
}
</script>

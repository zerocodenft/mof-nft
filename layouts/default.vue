<template>
  <div class="home-page">
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import StylesMixin from '@/mixins/stylesMixin'

export default {
  mixins: [StylesMixin],
  created() {
    const {isAttributionHidden} = this.$siteConfig.smartContract
    const {companyName} = this.$appConfig

    if (!isAttributionHidden && companyName === 'Zero Code NFT') {
      console.group('Powered by www.zerocodenft.com')
      console.info(
        '%cDrop Your NFT collection with ZERO coding skills!',
        `background: linear-gradient(100.07deg, #DB6F3D -28.71%, #9534DE 36.75%, #5FB9E6 103.59%);
        color:white;
        font-weight:bold;`
      )
      console.groupEnd()
    }
  },
}
</script>
<style lang="scss">
@import "assets/styles/variables";

.home-page {
	background-color: $bg-content;
}
</style>

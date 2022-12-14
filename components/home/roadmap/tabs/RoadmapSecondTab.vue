<template>
  <section class="roadmap-tab">
    <div class="roadmap-tab__line">
      <b-row class="align-items-center roadmap-tab-container">
        <b-col
          cols="12"
          md="6"
          class="d-flex justify-content-center">
          <img
            class="roadmap-tab__image"
            src="~/assets/img/roadmap/second-tab-ball.svg"
            alt="ball">
        </b-col>
        <b-col
          cols="12"
          md="6">
          <div class="d-flex flex-column">
            <p class="roadmap-tab__header text-white text-uppercase">LAUNCH METAVERSE VMUSEUM OF FOOTBALLS POWERED BY <span class="tab-underline">VSPACE</span></p>
            <ul class="roadmap-tab__paragraph">
              <li
                v-for="(list,index) in secondTabListData"
                :key="index">
                {{list}}
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RoadmapSecondTab',
  setup(){
    const secondTabListData = [
      "Launch of vMuseum of footballs Discord and Twitter",
      "Announcement of strategy, roadmap, and whitepaper of the vFootballs NFT Collection",
      "Launch a website for vMuseum of footballs project",
      "Choose Artists for the NFT Collection",
      "Key partnerships, promotions, and collaborations with partners/sponsors",
      "Launch metaverse vMuseum of Footballs build by vSpace",
      "Daily activities in Discord: contests, raffles, activity, challenges and leadership contests with the reward of WL spots",
      "Daily activities in Discord: contests, raffles, activity, challenges and leadership contests with the reward of WL spots"
    ]
    return {secondTabListData}
  }
}
</script>
<style scoped lang="scss">
.tab-underline{
	text-decoration: underline;
	text-decoration-color: white;
	text-underline-offset: 14px;
}
</style>

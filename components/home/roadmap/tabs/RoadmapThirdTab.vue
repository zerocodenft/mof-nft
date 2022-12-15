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
            src="~/assets/img/welcome/index-ball-3.png"
            alt="ball">
        </b-col>
        <b-col
          cols="12"
          md="6">
          <div class="d-flex flex-column">
            <p class="roadmap-tab__header text-white text-uppercase">METAVERSE VMUSEUM OF FOOTBALLS EXPANSION</p>
            <ul class="roadmap-tab__paragraph">
              <li
                v-for="(list,index) in thirdTabListData"
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
  name: 'RoadmapThirdTab',
  setup(){
    const thirdTabListData = [
      "Metaverse vMuseum of Footballs expansion",
      "Live events, live streams, and other activations in the metaverse",
      "Marketplace launch",
      "Token presale",
      "Launch of Alpha version of vGoal Play-to-Earn game",
      "Introduce In-App Marketplace for users to sell/buy in-game items",
      "In-game improvements (UI/UX)",
      "Launch of Beta version of MetaGoal Play-to-Earn game"
    ]
    return {thirdTabListData}
  }
}
</script>

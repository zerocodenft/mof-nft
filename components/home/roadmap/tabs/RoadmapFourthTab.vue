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
            <p class="roadmap-tab__header text-white text-uppercase">COLLABORATIONS WITH METAVERSE WORLDS / VR GALLERIES</p>
            <ul class="roadmap-tab__paragraph">
              <li
                v-for="(list,index) in fourthTabListData"
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
  name: 'RoadmapFourthTab',
  setup(){
    const fourthTabListData = [
      "Collaborations with metaverse worlds / VR galleries",
      "Launch 2nd season of vFootballs NFT Collection",
      "Release of vGoal Play-to-Earn game",
      "Future Development: Complete development of Metaverse museum and metaverse expansion"
    ]
    return {fourthTabListData}
  }
}
</script>

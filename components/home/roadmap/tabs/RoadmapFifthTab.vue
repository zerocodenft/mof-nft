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
            <p class="roadmap-tab__header text-white text-uppercase">LAUNCH OF VGOAL PLAY-TO-EARN GAME</p>
            <ul class="roadmap-tab__paragraph">
              <li
                v-for="(list,index) in fifthTabListData"
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
  name: 'RoadmapFifthTab',
  setup(){
    const fifthTabListData = ["Partnerships with sport brands and official football leagues"]
    return {fifthTabListData}
  }
}
</script>

<template>
  <section class="roadmap-tab">
    <div
      class="roadmap-tab__line">
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
            <p class="roadmap-tab__header text-white text-uppercase">Launch of world’s first Museum of Footballs</p>
            <ul
              v-for="(item,index) in firstTabListData"
              :key="index"
              class="roadmap-tab__paragraph">
              <li>{{ item }}</li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RoadmapFirstTab',
  setup(){
    const firstTabListData = ["Launch of world’s first Museum of Footballs", "Museum presence at World Cup 2018 in Russia"]
    return {firstTabListData}
  }
}
</script>

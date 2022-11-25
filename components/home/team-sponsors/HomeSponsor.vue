<template>
  <div class="sponsors-wrapper">
    <p class="text-white sponsors-wrapper__header text-uppercase font-weight-bold">Sponsors</p>
    <div class="d-flex flex-column">
      <div
        v-for="(sponsor,index) in sponsorsData"
        :key="index"
        class="sponsors-wrapper__line"
      >
        <div class="d-flex justify-content-between align-items-center sponsors-wrapper__content">
          <b-img
            :src="require(`~/assets/img/team-sponsors/${sponsor.imgLogo}.svg`)"
            alt="logo"/>
          <p class="sponsors-wrapper__paragraph mb-0 text-white text-uppercase font-weight-bold">{{sponsor.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSponsor",
  setup(){
    const sponsorsData = [{
      imgLogo: "first-logo",
      text:"lorem ipsum"
    },
    {
      imgLogo: "second-logo",
      text:"lorem ipsum"
    },
    {
      imgLogo: "third-logo",
      text:"lorem ipsum"
    },
    {
      imgLogo: "fourth-logo",
      text:"lorem ipsum"
    },
    {
      imgLogo: "first-logo",
      text:"lorem ipsum"
    },
    {
      imgLogo: "second-logo",
      text:"lorem ipsum"
    }]
    return { sponsorsData}
  }
}
</script>

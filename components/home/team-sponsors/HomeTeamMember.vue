<template>
  <div class="team-wrapper">
    <p class="text-white team-wrapper__header text-uppercase font-weight-bold">Team</p>
    <MBlur
      width="277px"
      height="443px"
      background="#FF0039"
      top="0"
      blur="219.5"
      left="0"
    />
    <div class="d-flex flex-wrap justify-content-center align-items-center team-wrapper-container">
      <div
        v-for="member in teamData"
        :key="member.imgName"
        class="team-wrapper__line"
      >
        <div class="d-flex flex-column align-items-center team-wrapper__content">
          <b-img
            :src="require(`~/assets/img/team-sponsors/${member.imgName}.svg`)"
            :alt="member.alt"/>
          <p class="team-wrapper__content-paragraph mt-4 mb-0 text-white text-uppercase font-weight-bold">{{member.name}}</p>
          <p class="team-wrapper__content-sub-paragraph">{{member.describe}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MBlur from "@/components/ui/MBlur";

export default {
  name: "HomeTeamMember",
  components: {MBlur},
  setup() {
    const teamData = [
      {
        imgName: "first-member",
        alt: "first-member",
        name: "lorem ipsum",
        describe: "lorem ipsum"
      },
      {
        imgName: "second-member",
        alt: "second-member",
        name: "lorem ipsum",
        describe: "lorem ipsum"
      },
      {
        imgName: "third-member",
        alt: "third-member",
        name: "lorem ipsum",
        describe: "lorem ipsum"
      },
      {
        imgName: "fourth-member",
        alt: "fourth-member",
        name: "lorem ipsum",
        describe: "lorem ipsum"
      },
      {
        imgName: "fifth-member",
        name: "lorem ipsum",
        alt: "fifth-member",
        describe: "lorem ipsum"
      },
      {
        imgName: "sixth-member",
        alt: "sixth-member",
        name: "lorem ipsum",
        describe: "lorem ipsum"
      },
    ]
    return {teamData}
  }
}
</script>

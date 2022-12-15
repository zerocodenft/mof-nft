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
    <div class="justify-content-center align-items-center team-wrapper-container">
      <div
        v-for="member in teamData"
        :key="member.imgName"
        class="team-wrapper__line"
      >
        <MGradientCard>
          <div class="d-flex flex-column align-items-center team-wrapper__content">
            <b-img
              class="w-100"
              :src="require(`~/assets/img/team-sponsors/${member.imgName}.png`)"
              :alt="member.alt"/>
            <p class="team-wrapper__content-paragraph mt-4 mb-0 text-white text-uppercase font-weight-bold">
              {{ member.name }}</p>
            <p class="team-wrapper__content-sub-paragraph">{{ member.describe }}</p>
          </div>
        </MGradientCard>
      </div>
    </div>
  </div>
</template>

<script>
import MBlur from '@/components/ui/MBlur';
import MGradientCard from '@/components/ui/MGradientCard';

export default {
  name: 'HomeTeamMember',
  components: {MGradientCard, MBlur},
  setup() {
    const teamData = [
      {
        imgName: 'third-member',
        alt: 'first-member',
        name: 'KHABIB NURMAGOMEDOV FOUNDATION',
        describe: 'Founder'
      },
      {
        imgName: 'first-member',
        alt: 'second-member',
        name: 'EKATERINA SHIMKO',
        describe: 'Founder'
      },
      {
        imgName: 'fifth-member',
        alt: 'third-member',
        name: 'OLGA ZHILENKO',
        describe: 'Founder'
      },
      {
        imgName: 'second-member',
        alt: 'fourth-member',
        name: 'MISHA RYABOV',
        describe: 'Creative Advisor'
      },
      {
        imgName: 'fourth-member',
        name: 'FELIPE L. VOROBEY',
        alt: 'fifth-member',
        describe: 'Growth & Marketing'
      },
    ]
    return {teamData}
  }
}
</script>

<template>
  <section
    id="team"
    class="container-box mx-auto team-sponsor-wrapper">
    <b-row class="team-sponsor-block">
      <b-col
        xl="9"
        xs="12"
        lg="8"
        sm="12"
        class="p-0">
        <HomeTeamMember/>
      </b-col>
      <b-col
        xl="3"
        xs="12"
        lg="4"
        sm="12"
      >
        <HomeSponsor/>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import HomeSponsor from '~/components/home/team-sponsors/HomeSponsor';
import HomeTeamMember from '~/components/home/team-sponsors/HomeTeamMember';

export default {
  name: 'HomeTeamAndSponsors',
  components: {HomeTeamMember, HomeSponsor},
}
</script>
<style lang="scss">
.team-sponsor-wrapper {
	padding-top: 8.375rem;

	@media (max-width: 768px) {
		padding-top: 4.375rem;
	}
}

.team-sponsor-block {
	@media (max-width: 768px) {
		flex-direction: column !important;
	}
}
</style>

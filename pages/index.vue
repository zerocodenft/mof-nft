<template>
  <main class="main">
    <HomeWelcome/>
    <HomeVisit/>
    <HomeBenfits/>
    <HomeAbout/>
    <HomeProjectEcosystem/>
    <HomeRoadmap/>
    <HomeTeamAndSponsors/>
  </main>
</template>

<script>
import HomeWelcome from '~/components/home/welcome/HomeWelcome';
import HomeBenfits from '~/components/home/HomeBenfits';
import HomeAbout from '~/components/home/HomeAbout';
import HomeTeamAndSponsors from '~/components/home/team-sponsors/HomeTeamAndSponsors';
import HomeProjectEcosystem from '~/components/home/project-ecosystem/HomeProjectEcosystem';
import HomeRoadmap from '@/components/home/roadmap/HomeRoadmap';
import HomeVisit from '@/components/home/visit/HomeVisit';

export default {
  name: 'Index',
  components: {
    HomeRoadmap,
    HomeWelcome,
    HomeBenfits,
    HomeAbout,
    HomeTeamAndSponsors,
    HomeProjectEcosystem,
    HomeVisit
  }
}
</script>

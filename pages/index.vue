<template>
  <main class="main">
    <HomeWelcome/>
    <HomeVisit/>
    <HomeCollectSet/>
    <HomeBenfits/>
    <HomeAbout/>
    <HomeProjectEcosystem/>
    <HomeRoadmap/>
    <HomeTeamAndSponsors/>
    <HomeFAQ/>
  </main>
</template>

<script>
import HomeWelcome from '~/components/home/welcome/HomeWelcome';
import HomeBenfits from '~/components/home/HomeBenfits';
import HomeAbout from '~/components/home/HomeAbout';
import HomeFAQ from '~/components/home/faq/HomeFAQ'
import HomeTeamAndSponsors from '~/components/home/team-sponsors/HomeTeamAndSponsors';
import HomeCollectSet from '~/components/home/collect-set/HomeCollectSet';
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
    HomeFAQ,
    HomeCollectSet,
    HomeProjectEcosystem,
    HomeVisit
  }
}
</script>

<template>
  <main class="main overflow-hidden">
    <HomeWelcome/>
    <HomeCollectSet/>
    <HomeBenfits/>
    <HomeAbout/>
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

export default {
  name: 'Index',
  components: {
    HomeWelcome,
    HomeBenfits,
    HomeAbout,
    HomeTeamAndSponsors,
    HomeFAQ,
    HomeCollectSet
  }
}
</script>

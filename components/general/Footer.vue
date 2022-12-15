<template>
  <footer class="footer">
    <h1 class="footer__logo text-center">
        <b-img width="180px" src="../../assets/img/logos/logo.png"></b-img>
    </h1>
    <b-row class="d-flex m-0 align-items-center justify-content-center">
      <HeaderNav class="mt-5 mb-4"/>
      <SocialLinks class="mt-2 mb-3"/>
      <p class="footer__copyright">vFootballs © 2022</p>
    </b-row>
  </footer>
</template>

<script>
import {ref} from '@vue/composition-api';
import HeaderNav from '@/components/general/HeaderNav';
import SocialLinks from "@/components/ui/SocialLinks";

export default {
  name: 'Footer',
  components: {
    HeaderNav,
    SocialLinks
  },
  setup() {
    const footerData = ref(['ABOUT', 'ECOSYSTEM', 'ROADMAP', 'TEAM', 'HOW TO BUY', 'FAQ'])
    return {
      footerData
    }
  }
}
</script>

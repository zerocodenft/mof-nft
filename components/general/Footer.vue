<template>
  <footer class="footer">
    <h1 class="footer__logo text-center">LOGO</h1>
    <b-row class="d-flex flex-column align-items-center justify-content-center">
      <ul class="footer__list d-flex justify-content-center p-0">
        <li
          v-for="(item, index) in footerData"
          :key="index"
          class="list__item"
        >{{ item }}
        </li>
      </ul>
      <p class="footer__copyright">vFootballs © 2022</p>
    </b-row>
  </footer>
</template>

<script>
import {ref} from '@vue/composition-api';

export default {
  name: 'Footer',
  setup() {
    const footerData = ref(['ABOUT', 'ECOSYSTEM', 'ROADMAP', 'TEAM', 'HOW TO BUY', 'FAQ'])

    return {
      footerData
    }
  }
}
</script>

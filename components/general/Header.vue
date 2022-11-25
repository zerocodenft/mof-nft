<template>
  <div class="header-block container mx-auto">
    <b-navbar
      class="d-flex align-items-center justify-content-between"
      toggleable="lg"
      type="dark">
      <b-navbar-brand
        active-class="header-block__logo text-white text-uppercase font-weight-bold"
        to="/">LOGO</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse
        id="nav-collapse"
        is-nav>
        <b-navbar-nav class="w-100 d-flex header-block__links justify-content-center align-items-center">
          <b-nav-item
            v-for="link in headerLinks"
            :key="link.id"
            :to="link.id"
            link-classes="header-block__link text-white text-uppercase"
            class="text-uppercase text-white">
            {{ link.link }}
          </b-nav-item>
        </b-navbar-nav>
        <MintButtonWithWert
          :button-img="'wallet'"
          :button-text="'Connect wallet'"></MintButtonWithWert>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {copyToClipboard} from '@/utils'
import MintButtonWithWert from '~/components/MintButtonWithWert';

export default {
  components: {MintButtonWithWert},
  data() {
    const headerLinks = [
      {id: '#about', link: 'About'},
      {id: '#ecosystem', link: 'Ecosystem'},
      {id: '#roadmap', link: 'Roadmap'},
      {id: "#team", link: 'Team'},
      {id: "#howToBuy", link: 'How to buy'},
      {id: '#faq', link: 'Faq'}
    ]
    return {headerLinks}
  },
  methods: {
    copyToClipboard,
    updatePosition(settings) {
      this.$onboard.state.actions.updateAccountCenter({
        ...settings,
      })
    },
  },
}
</script>

<template>
  <div>
    <b-navbar
      class="
			d-flex
			align-items-center
			justify-content-between
		"
      toggleable="lg"
      type="dark">
      <b-navbar-brand href="#">LOGO</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav>
        <b-navbar-nav class="w-100 d-flex justify-content-center align-items-center">
          <b-nav-item
            v-for="link in headerLinks"
            :key="link"
            class="text-uppercase text-white">{{link}}</b-nav-item>
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
    const headerLinks = ['About', 'Ecosystem', 'Roadmap', 'Team', 'How to buy', 'Faq']
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

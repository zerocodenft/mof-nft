<template>
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
</template>

<script>
export default {
  name: 'HeaderNav',
  setup() {
    const headerLinks = [
      {id: '#about', link: 'About'},
      {id: '#ecosystem', link: 'Ecosystem'},
      {id: '#roadmap', link: 'Roadmap'},
      {id: '#team', link: 'Team'},
      {id: '#howToBuy', link: 'How to buy'},
    ]
    return {
      headerLinks
    }
  }
}
</script>

<style scoped>

</style>

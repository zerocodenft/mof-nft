<template>
  <div class="footer__links d-flex w-100 justify-content-center align-items-center">
    <p
      v-for="icon in footerLinks"
      :key="icon.imgName"
      class="footer__link">
      <a
        :href="`${icon.link}`"
        target="_blank">
        <img
          :src="require(`~/assets/img/footer/social-icons/${icon.imgName}.svg`)"
          :alt="`${icon.imgName}`">
      </a>
    </p>
  </div>
</template>

<script>
import {ref} from "@vue/composition-api";

export default {
  name: 'SocialLinks',
  setup() {
    const footerLinks = ref([{
      imgName: 'discord',
      link: "https://discord.com/invite/ZjGDDv2VfH"
    },
    {imgName: "twitter", link: "https://twitter.com/vfootballs_nft/"},
    {imgName: "telegram", link: "https://t.me/vfootballs"}])
    return {
      footerLinks
    }
  }
}
</script>

<template>
  <div class="welcome-visit">
    <b-row class="d-flex align-items-center">
      <b-col
        cols="12"
        md="5">
        <p class="welcome-visit__title text-white font-weight-bold">Visit the first Museum of Footballs in Metaverse.</p>
      </b-col>
      <b-col
        cols="12"
        md="4">
        <p class="welcome-visit__description text-white">vFootbals NFT is a part of ecosystem Museum of Footballs</p>
      </b-col>
      <b-col
        cols="12"
        md="3"
        class="d-flex justify-content-center align-items-center">
        <b-button class="universal-button">
          Go to Museum
          <b-img
            src="~/assets/img/welcome/button-arrows.svg"
            alt="arrows"></b-img>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'HomeWelcomeVisit'
}
</script>

<style scoped lang="scss">
@import "assets/styles/mixins";

.welcome-visit {
	padding: 2.5rem 4rem;
	background: linear-gradient(89.47deg, rgba(21, 11, 64, 0) -37.13%, #3936FF 10.51%, #F83FFF 90.65%, rgba(21, 11, 64, 0) 121.5%);

	@media (max-width: 768px) {
		padding: 2.5rem 1.5rem;
	}

	&__title {
		@include fonts(normal, 700, clamp(2rem, 2.5vw, 2.25rem), inherit);
	}

	&__description {
		@include fonts(normal, 400, clamp(1.5rem, 1.5vw, 1.625rem), inherit);
	}
}
</style>

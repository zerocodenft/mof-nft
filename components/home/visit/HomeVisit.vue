<template>
  <div class="welcome-visit">
    <b-row class="d-flex container-box align-items-center">
      <b-col
        cols="12"
        md="5">
        <p class="welcome-visit__title text-white font-weight-bold mb-0">Visit the first Museum of Footballs in
          Metaverse.</p>
      </b-col>
      <b-col
        cols="12"
        md="4">
        <p class="welcome-visit__description text-white mb-0">vFootbals NFT is a part of ecosystem Museum of Footballs</p>
      </b-col>
      <b-col
        cols="12"
        md="3"
        class="d-flex justify-content-md-center justify-content-start align-items-center">
        <b-button class="universal-button welcome-visit__button">
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
	padding: clamp(1.4rem, 2.5vw, 2.4rem) 0;
	background: linear-gradient(89.47deg, rgba(21, 11, 64, 0) -37.13%, #3936FF 10.51%, #F83FFF 90.65%, rgba(21, 11, 64, 0) 121.5%);

	&__title {
		@include fonts(normal, 700, clamp(1.5rem, 2.5vw, 2.25rem), inherit);
		line-height: clamp(1.5rem, 2.5vw, 2.5rem);
		text-transform: uppercase;

		@media (max-width: 768px) {
			margin-bottom: 1rem !important;
		}
	}

	&__description {
		@include fonts(normal, 400, clamp(1rem, 1.5vw, 1.625rem), inherit);
	}

	&__button {
		@media (max-width: 768px) {
			margin-top: 1.5rem;
		}
	}
}
</style>

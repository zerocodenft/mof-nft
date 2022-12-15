<template>
  <div class="welcome-visit">
    <div class="welcome-visit__line">
      <b-row class="welcome-visit__wrapper">
        <b-col
          xs="12"
          md="8"
          lg="6"
          class="justify-content-center align-items-center text-center">
          <p class="welcome-visit__title text-white font-weight-bold mb-0">
			VISIT THE FIRST MUSEUM OF FOOTBALLS IN THE METAVERSE
			</p>
        </b-col>
        <b-col class="col-6 justify-content-center align-items-center text-center">
          <b-button
            class="
        universal-button
        welcome-visit__button">
            <a
              class="welcome-visit__link"
              href="https://vspace.live/vfootballs"
              target="_blank">Go to museum</a>
            <b-img
              src="~/assets/img/welcome/button-arrows.svg"
              alt="arrows"></b-img>
          </b-button>
        </b-col>
      </b-row>
    </div>
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
	max-width: 1920px;
	margin: 0 auto;
	overflow: hidden;
	@media (max-width: 1024px) {
		margin-top: 0;
	}

	&__line {
		border-radius: 1rem;
		padding: 1px 0;
		overflow: hidden;
		background: linear-gradient(90deg, rgba(21, 11, 64, 1) 0%, rgba(248, 63, 255, 1) 30%, rgba(57, 54, 255, 1) 80%, rgba(21, 11, 64, 1) 100%);
		margin-bottom: 1.25rem;
	}

	&__link {
		text-decoration: none;
		color: white;
	}

	&__wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 3.875rem;
		background: radial-gradient(circle, rgba(38, 29, 78, 1) 0%, rgba(21, 11, 64, 1) 100%);
		@media (max-width: 1024px) {
			gap: 2rem;
		}
		@media (max-width: 375px) {
			gap: 1.5rem;
		}
	}

	&__title {
		@include fonts(normal, 700, clamp(1.5rem, 2.5vw, 2.25rem), inherit);
		line-height: clamp(1.5rem, 2.5vw, 2.5rem);
		text-transform: uppercase;
		margin-top: 9.5rem;
		@media (max-width: 1024px) {
			margin-top: 6.5rem;
		}
		@media (max-width: 768px) {
			margin-top: 4.5rem;
		}
	}

	&__description {
		@include fonts(normal, 400, clamp(1rem, 1.5vw, 1.625rem), inherit);
	}

	&__button {
		margin-bottom: 5.625rem;
		@media (max-width: 1024px) {
			margin-bottom: 3.5rem;
		}
		@media (max-width: 768px) {
			margin-bottom: 2.5rem;
		}
	}
}
</style>

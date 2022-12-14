<template>
  <section
    id="about"
    class="about-wrapper container-box mx-auto">
    <b-row>
      <b-col
        class="about-wrapper__content"
        xl="7">
        <MBlur
          width="266px"
          height="209px"
          background="#FF0039"
          top="40%"
          blur="159.5"
          left="0"
        />
        <!--blue-->
        <MBlur
          width="200px"
          height="200px"
          background="#3936FF"
          bottom="300px"
          blur="219"
          right="0"
          margin-bottom="-45%"
          transform="rotate(63.41deg)"
        />
        <b-img
          class="w-100 about-wrapper__image"
          src="~/assets/img/about/about-img.png"
          alt="aboutImg"/>
      </b-col>
      <b-col
        xl="5"
        class="align-self-center">
        <h2 class="about-wrapper__header">About the project</h2>
        <p class="about-wrapper__paragraph">
          <span class="about-wrapper__paragraph-span">Our Mission</span> is unite all football fans around the world. The
          Museum of Footballs project unites people together just as football does.
        </p>
        <p class="about-wrapper__paragraph">
          The project was initiated by <span class="about-wrapper__paragraph-span">Khabib Nurmagomedov Foundation</span> and
          includes:
        </p>
        <ul class="about-wrapper__paragraph">
          <li>vMuseum of Footballs in the<span class="about-wrapper__paragraph-span"> metaverse</span></li>
          <li>vFootablls NFT Collection<span class="about-wrapper__paragraph-span"> NFT Collection</span></li>
          <li>future <span class="about-wrapper__paragraph-span">P2E</span> game vGoal</li>
          <li>museum has more than 1,000 footballs all over around the world and from different football leagues.</li>
        </ul>
        <p class="about-wrapper__paragraph">
          <span class="about-wrapper__paragraph-span">Metaverse version started with one room and 24 3D balls.</span> In the
          future, all 1,000 balls will be added to the metaverse. NFT Collection will be copies of 3D balls that are present
          in the metaverse.
        </p>
        <p class="about-wrapper__paragraph">
          We will start with a small collection (season 1) and launch more seasons in the future. Those drops will be tight
          to major football events.
        </p>
        <b-button class="universal-button">
          <a
            target="_blank"
            class="about-wrapper__link"
            href="https://vfootballs.com/en"> go to museum of footballs</a>
          <b-img
            src="~/assets/img/welcome/button-arrows.svg"
            alt="arrows"></b-img>
        </b-button>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import MBlur from '@/components/ui/MBlur';

export default {
  name: 'HomeBenfits',
  components: {MBlur},
  setup() {
    return {}
  }
}
</script>

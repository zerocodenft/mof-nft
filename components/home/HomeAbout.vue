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
          <span>
            Football goes digital! Museum of Footballs project was initiated by Khabib Nurmagomedov Foundation and includes:
          </span>
        </p>
        <ul class="about-wrapper__paragraph">
        <li>vMuseum of Footballs (metaverse powered by vSpace.live)</li>
        <li>vFootballs (NFT Collection)</li>
        <li>vGoal (future Play-to-Earn game) </li>
        <li>The offline and online museum of footballs (over 450 footballs from all over the world in our collection)</li>
        </ul>
        <p class="about-wrapper__paragraph">
          vMuseum of Footballs metaverse already launched and currently has 24 3D copies of footballs from the very first World Cup to the up-to-date one in Qatar. Soon, other footballs from our collection will be added to vMuseum. 
        </p>
        <p class="about-wrapper__paragraph">
          Join us, visit our virtual museum, become our NFT holder, and participate in all future events!
        </p>
        <b-button class="universal-button">
          <a
            target="_blank"
            class="about-wrapper__link"
            href="https://vspace.live/vfootballs">
            go to museum of footballs
          </a>
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

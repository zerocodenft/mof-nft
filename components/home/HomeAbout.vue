<template>
  <section
    id="about"
    class="about-wrapper container mx-auto">
    <b-row class="about-wrapper__content">
      <b-col xl="7">
        <b-img
          class="w-100 about-wrapper__image"
          src="~/assets/img/about/about-img.png"
          alt="aboutImg"/>
      </b-col>
      <b-col
        xl="5"
        class="align-self-center">
        <h2 class="about-wrapper__header">About the project</h2>
        <p
          v-for="(paragraph,index) in paragraphData"
          :key="paragraph"
          class="about-wrapper__paragraph"
          :class="{'about-wrapper__paragraph2': index === 1 || index === paragraphData.length-1}">
          {{ paragraph }}
        </p>
        <b-button class="universal-button">
          go to museum of footballs
          <b-img
            src="~/assets/img/welcome/button-arrows.svg"
            alt="arrows"></b-img>
        </b-button>
      </b-col>
    </b-row>
  </section>
</template>

<script>

export default {
  name: 'HomeBenfits',
  setup() {
    const paragraphData = ['Our Mission is unite all football fans around the world. The Museum of Footballs project unites people together just as football does.',
      'The project was initiated by Khabib Nurmagomedov Foundation and includes vMuseum of Footballs in the metaverse, ' +
			'vFootablls NFT Collection, and future P2E game vGoal.IRL museum has more than 1,000 footballs all over around ' +
			'the world and from different football leagues. Metaverse version will start with 1 room and 24 3D copies of ' +
			'balls from World Cups. In the future, all 1,000 balls will be added to the metaverse.' +
			'  NFT Collection will be copies of 3D balls that are present in the metaverse. We will start with a small collection (season 1) ' + 'and launch more seasons in the future. Those drops will be tight to major football events. The first drop will be on November 27 when the World Cup 2022 in Qatar starts.',
      'Play-to-Earn game development will commence Q1 2023. vGoal is being developed with the usage of the Play-to-Earn game model that allows players to receive tokens and NFTs for victories and tournaments as well as for completing daily tasks. The game will be on the Unity engine, allowing it to be eventually deployed on both Desktop and Mobile.']
    return {paragraphData}
  }
}
</script>

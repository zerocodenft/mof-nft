<template>
  <div
    id="faq"
    class="faq container position-relative"
    role="tablist"
  >
    <h2 class="faq__title text-white text-center">
      FAQ
    </h2>
    <div
      v-for="item in faqData"
      :key="item.id"
      class="faq__gradient-line mb-4"
    >
      <div
        class="faq__content py-4"
      >
        <b-button
          v-b-toggle="item.id"
          class="faq__button border-0 px-3 w-100 position-relative"
          block
        >
          <p class="text-left button__text mb-0">
            {{ item.title }}
          </p>
          <img
            :class="{ 'toggle-open': item.visible }"
            class="faq__arrow position-absolute right-0"
            src="@/assets/img/faq/arrow.svg"
            alt=""
          >
        </b-button>
        <b-collapse
          :id="item.id"
          v-model="item.visible"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body class="px-3">
            <b-card-text class="faq__description">
              {{ item.text }}
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </div>
    </div>
    <MBlur
      width="277px"
      height="443px"
      background="#F83FFF"
      top="0"
      blur="301"
      right="0"
      margin-right="-20%"
    />
  </div>
</template>

<script>
import {ref} from '@vue/composition-api'
import MBlur from "@/components/ui/MBlur";

export default {
  name: 'HomeFAQ',
  components: {MBlur},
  setup() {
    const faqData = ref([
      {
        id: 'one',
        visible: true,
        title: 'What is vFootballs NFT?',
        text: 'Lorem ipsum dolor sit amet consectetur. Diam a consequat purus id suspendisse quam diam. Sed elementum sollicitudin tristique blandit lacus. Sed etiam consectetur ornare consequat proin orci. Bibendum lacus varius ullamcorper netus.\n' +
					'Gravida ultrices massa nibh hendrerit turpis. Imperdiet ipsum mattis sit pretium morbi scelerisque sociis sed sit. Lectus dui nisl lacinia ac feugiat nulla amet. Ac neque cras id sit. Morbi mi sollicitudin elit pellentesque commodo. Sagittis placerat et dictum egestas elit malesuada lectus mi maecenas. Cursus volutpat cursus id quis turpis elit. Id mi morbi amet turpis varius massa eget pretium. Nisi adipiscing tortor auctor nibh sit libero.'
      },
      {
        id: 'two',
        visible: false,
        title: 'How to buy NFT?',
        text: 'Lorem ipsum dolor sit amet consectetur. Diam a consequat purus id suspendisse quam diam. Sed elementum sollicitudin tristique blandit lacus. Sed etiam consectetur ornare consequat proin orci. Bibendum lacus varius ullamcorper netus.\n' +
					'Gravida ultrices massa nibh hendrerit turpis. Imperdiet ipsum mattis sit pretium morbi scelerisque sociis sed sit. Lectus dui nisl lacinia ac feugiat nulla amet. Ac neque cras id sit. Morbi mi sollicitudin elit pellentesque commodo. Sagittis placerat et dictum egestas elit malesuada lectus mi maecenas. Cursus volutpat cursus id quis turpis elit. Id mi morbi amet turpis varius massa eget pretium. Nisi adipiscing tortor auctor nibh sit libero.'
      },
      {
        id: 'three',
        visible: false,
        title: 'How many NFT I can mint?',
        text: 'Lorem ipsum dolor sit amet consectetur. Diam a consequat purus id suspendisse quam diam. Sed elementum sollicitudin tristique blandit lacus. Sed etiam consectetur ornare consequat proin orci. Bibendum lacus varius ullamcorper netus.\n' +
					'Gravida ultrices massa nibh hendrerit turpis. Imperdiet ipsum mattis sit pretium morbi scelerisque sociis sed sit. Lectus dui nisl lacinia ac feugiat nulla amet. Ac neque cras id sit. Morbi mi sollicitudin elit pellentesque commodo. Sagittis placerat et dictum egestas elit malesuada lectus mi maecenas. Cursus volutpat cursus id quis turpis elit. Id mi morbi amet turpis varius massa eget pretium. Nisi adipiscing tortor auctor nibh sit libero.'
      },
      {
        id: 'four',
        visible: false,
        title: 'Could I sell NFT in future?',
        text: 'Lorem ipsum dolor sit amet consectetur. Diam a consequat purus id suspendisse quam diam. Sed elementum sollicitudin tristique blandit lacus. Sed etiam consectetur ornare consequat proin orci. Bibendum lacus varius ullamcorper netus.\n' +
					'Gravida ultrices massa nibh hendrerit turpis. Imperdiet ipsum mattis sit pretium morbi scelerisque sociis sed sit. Lectus dui nisl lacinia ac feugiat nulla amet. Ac neque cras id sit. Morbi mi sollicitudin elit pellentesque commodo. Sagittis placerat et dictum egestas elit malesuada lectus mi maecenas. Cursus volutpat cursus id quis turpis elit. Id mi morbi amet turpis varius massa eget pretium. Nisi adipiscing tortor auctor nibh sit libero.'
      },
      {
        id: 'five',
        visible: false,
        title: 'What is the cost to mint?',
        text: 'Lorem ipsum dolor sit amet consectetur. Diam a consequat purus id suspendisse quam diam. Sed elementum sollicitudin tristique blandit lacus. Sed etiam consectetur ornare consequat proin orci. Bibendum lacus varius ullamcorper netus.\n' +
					'Gravida ultrices massa nibh hendrerit turpis. Imperdiet ipsum mattis sit pretium morbi scelerisque sociis sed sit. Lectus dui nisl lacinia ac feugiat nulla amet. Ac neque cras id sit. Morbi mi sollicitudin elit pellentesque commodo. Sagittis placerat et dictum egestas elit malesuada lectus mi maecenas. Cursus volutpat cursus id quis turpis elit. Id mi morbi amet turpis varius massa eget pretium. Nisi adipiscing tortor auctor nibh sit libero.'
      },
      {
        id: 'six',
        visible: false,
        title: 'How many NFTs are available for minting?',
        text: 'Lorem ipsum dolor sit amet consectetur. Diam a consequat purus id suspendisse quam diam. Sed elementum sollicitudin tristique blandit lacus. Sed etiam consectetur ornare consequat proin orci. Bibendum lacus varius ullamcorper netus.\n' +
					'Gravida ultrices massa nibh hendrerit turpis. Imperdiet ipsum mattis sit pretium morbi scelerisque sociis sed sit. Lectus dui nisl lacinia ac feugiat nulla amet. Ac neque cras id sit. Morbi mi sollicitudin elit pellentesque commodo. Sagittis placerat et dictum egestas elit malesuada lectus mi maecenas. Cursus volutpat cursus id quis turpis elit. Id mi morbi amet turpis varius massa eget pretium. Nisi adipiscing tortor auctor nibh sit libero.'
      }
    ])
    return {
      faqData,
    }
  }
}
</script>

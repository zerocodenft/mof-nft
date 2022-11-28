<template>
  <div
    class="rounded-pill roadmap-line-item"
    :class="{ 'roadmap-line-item-active': item.active }"
    @click="changeActiveTab">
    <div class="circle"/>
    <div class="position-absolute content-info">
      <p class="title text-uppercase text-white font-weight-bold">{{ item.title }}</p>
      <p class="subtitle text-uppercase font-weight-bold mb-0">{{ item.subTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRoadmapLineItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  emits: ['changeTab'],
  setup(props, {emit}) {
    const changeActiveTab = () => {
      emit('changeTab', props.item.componentName, props.index)
    }
    return {changeActiveTab}
  }
}
</script>
<style scoped lang="scss">
@import "assets/styles/variables";

.roadmap-line-item {

	.circle {
		position: relative;
		width: 2.1rem;
		height: 2.1rem;
		border-radius: 50%;
		background: $circleColor;
		transform: translate(0, -30%);
		transition: all 0.5s;
		z-index: 1;

		&:after {
			display: block;
			content: '';
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: -1rem;
			width: 2px;
			background: $circleColor;
			height: 1.5rem;
			z-index: 0;
		}

	}

	.title {
		font-size: 1.5rem;
		line-height: 2rem;
		margin-bottom: 0.313rem !important;
	}

	.subtitle {
		font-size: 1rem;
		line-height: 1.375rem;
		color: $circleColor;
	}

	.content-info {
		top: -6rem;
		transition: all 0.5s;
	}

}

.roadmap-line-item-active {

	.circle {
		display: flex;
		justify-content: center;
		align-items: center;
		transform: scale(1.4) translate(0%, -20%);
		z-index: 1;

		&::before {
			display: block;
			content: '';
			width: 50%;
			height: 50%;
			background: #150B40;
			border-radius: 50%;
		}

	}

	.content-info {
		top: -8rem;
	}

}
</style>

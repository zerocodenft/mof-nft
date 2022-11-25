<template>
  <div class="gradient-card">
    <div class="gradient-card__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MGradientCard',
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.gradient-card {
	background: linear-gradient(0deg, rgba(21, 11, 64, 1) 0%, rgba(57, 54, 255, 1) 50%, rgba(248, 63, 255, 1) 87%);
	border-radius: 1rem;
	padding: 1px;
	overflow: hidden;

	&__content {
		background: linear-gradient(0deg, rgba(22, 12, 65, 1) 0%, rgba(31, 19, 81, 1) 87%);
		border-radius: 1rem;
	}
}
</style>

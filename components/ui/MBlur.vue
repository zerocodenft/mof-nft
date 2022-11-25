<template>
  <div
    class="blur-block position-absolute"
    :style="{...$attrs, 'filter': `blur(${blur}px)`}"
  />
</template>

<script>
export default {
  name: 'MBlur',
  props: {
    blur: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
.blur-block {
	border-radius: 50%;
	z-index: 0
}
</style>

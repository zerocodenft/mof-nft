<template>
	<button class="c-button">
		{{buttonText}}
	</button>
</template>

<script>
export default {
	name: "CButton",
	props: {
		buttonText:{
			type: String
		}
	}
}
</script>

<style  lang="scss">
.c-button{
	display: flex;
	justify-content: center;
	align-items: center;
	background: $buttonBgColor;
	cursor: pointer !important;
	color: white;
}
</style>

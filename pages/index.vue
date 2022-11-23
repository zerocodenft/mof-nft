<template>
	<div
		class="d-flex flex-column">
		<HomeWelcome/>
		<HomeBenfits/>
		<HomeAbout/>
	</div>
</template>
<script>
import HomeWelcome from "~/components/home/welcome/HomeWelcome";
import HomeBenfits from "@/components/home/HomeBenfits";
import HomeAbout from "@/components/home/HomeAbout";

export  default {
	components: {HomeWelcome, HomeBenfits, HomeAbout}
}
</script>
<style lang="scss">
:root {
	--account-center-position-top: 40px;
}
</style>

<template>
	<div class="countdown-wrapper">
		<p class="countdown-wrapper__header text-white text-nowrap">
			NFT mint will start:
		</p>
		<b-row class="d-flex flex-nowrap justify-content-start w-100 m-0">
			<b-col
				class="countdown-wrapper__time d-flex flex-column justify-content-center align-items-center pl-0">
				<p class="countdown-wrapper__digit text-white font-weight-bold">
					{{ twoDigits(getDays) }}
				</p>
				<span class="countdown-wrapper__title text-white">Day</span>
			</b-col>
			<b-col class="d-flex justify-content-center align-items-center m-0 p-0">
				<span class="countdown-wrapper__divider" />
			</b-col>
			<b-col
				class="countdown-wrapper__time d-flex flex-column justify-content-center align-items-center pl-0">
				<p class="countdown-wrapper__digit text-white font-weight-bold">
					{{ twoDigits(getHours) }}
				</p>
				<span class="countdown-wrapper__title text-white">Hours</span>
			</b-col>
			<b-col class="d-flex justify-content-center align-items-center m-0 p-0">
				<span class="countdown-wrapper__divider" />
			</b-col>
			<b-col
				class="countdown-wrapper__time d-flex flex-column justify-content-center align-items-center pl-0">
				<p class="countdown-wrapper__digit text-white font-weight-bold">
					{{ twoDigits(getMinutes) }}
				</p>
				<span class="countdown-wrapper__title text-white">Minutes</span>
			</b-col>
			<b-col class="d-flex justify-content-center align-items-center m-0 p-0">
				<span class="countdown-wrapper__divider" />
			</b-col>
			<b-col
				class="countdown-wrapper__time d-flex flex-column justify-content-center align-items-center pl-0">
				<p class="countdown-wrapper__digit text-white font-weight-bold">
					{{ twoDigits(getSeconds) }}
				</p>
				<span class="countdown-wrapper__title text-white">Seconds</span>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/composition-api'

export default {
	name: 'HomeCountdown',
	props:{
		date:{
			type:String,
		}
	},
	setup(props) {
		const currentDate = ref(Math.trunc(new Date().getTime() / 1000))

		const dateInMilliseconds = computed(() =>
			Math.trunc(Date.parse(props.date) / 1000)
		)
		const getSeconds = computed(
			() => (dateInMilliseconds.value - currentDate.value) % 60
		)
		const getMinutes = computed(
			() => Math.trunc((dateInMilliseconds.value - currentDate.value) / 60) % 60
		)
		const getHours = computed(
			() =>
				Math.trunc((dateInMilliseconds.value - currentDate.value) / 60 / 60) % 24
		)
		const getDays = computed(() =>
			Math.trunc((dateInMilliseconds.value - currentDate.value) / 60 / 60 / 24)
		)

		const twoDigits = (value) => {
			if (value < 0) {
				return '00'
			}
			if (value.toString().length <= 1) {
				return `0${value}`
			}
			return value
		}
		const timeToEST = () => {
			const offset = new Date().getTimezoneOffset()
			const date = new Date('2022-12-15T15:00:00')
			date.setMinutes(date.getMinutes() + offset)
			const easternTimeOffset = -60
			date.setMinutes(date.getMinutes() + easternTimeOffset)
			return date.toISOString()
		}

		onMounted(() => { 
			setInterval(() => {
				currentDate.value = Math.trunc(new Date().getTime() / 1000)
			}, 1000)
		})
		return {
			getSeconds,
			getMinutes,
			getHours,
			getDays,
			twoDigits,
		}
	},
}
</script>
<style lang="scss" scoped>
@import 'assets/styles/mixins';
@import 'assets/styles/variables';

.countdown-wrapper {
	max-width: 25rem;
	margin-bottom: 1.7rem;

	&__header {
		@include fonts(normal, 400, clamp(1.4rem, 1.5vw, 1.625rem), inherit);
		margin-bottom: 2.8rem;
	}

	&__digit {
		@include fonts(normal, 700, clamp(1.7rem, 2.5vw, 2.25rem), inherit);
		margin-bottom: 0.625rem;
	}

	&__title {
		@include fonts(normal, 300, clamp(0.9rem, 1.5vw, 1rem), inherit);
	}

	&__divider {
		display: block;
		height: 60%;
		width: 1px;
		background: $white;
	}
}
</style>

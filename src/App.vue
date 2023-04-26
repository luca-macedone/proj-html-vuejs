<script>
import AppHeader from './components/AppHeader.vue';
export default {
	name: 'App',
	data() {
		return {

		}
	},
	components: {
		AppHeader,
	}
}
</script>

<template>
	<div>
		<AppHeader/>
	</div>	
</template>

<style lang="scss">
@use './assets/sass/app.scss' as *;
</style>

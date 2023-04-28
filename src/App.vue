<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
	name: 'App',
	components: {
		AppHeader,
		AppMain,
		AppFooter,
	},
	data() {
		return {
			headerLinks: [
				{
					name: 'Home',
					href: '#',
					badge: '',
				},
				{
					name: 'Services',
					href: '#',
					badge: '',
				},
				{
					name: 'About',
					href: '#',
					badge: '',
				},
				{
					name: 'Videos',
					href: '#',
					badge: '',
				},
				{
					name: 'Blog',
					href: '#',
					badge: '',
				},
				{
					name: 'Store',
					href: '#',
					badge: 'new',
				},
			],
		}
	}
}
</script>

<template>
	<div>
		<AppHeader :list="headerLinks"/>
		<AppMain />
		<AppFooter/>
	</div>
</template>

<style lang="scss">
@use './assets/sass/app.scss' as *;
</style>

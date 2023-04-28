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
			scrollPositionY: 0,
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			this.scrollPositionY = window.scrollY;
		},
		toTop() {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		},
	}
}
</script>

<template>
	<div>
		<AppHeader :list="headerLinks" />
		<AppMain />
		<AppFooter />
		<button class="btn shadow" v-show="scrollPositionY > 300" id="scroll-top-btn" @click="toTop">
			<font-awesome-icon icon="fa-solid fa-arrow-up" />
		</button>
	</div>
</template>

<style lang="scss">
@use './assets/sass/app.scss' as *;
</style>

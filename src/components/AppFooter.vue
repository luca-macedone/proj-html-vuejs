<template>
    <div>
        <AppFooterTop class="border-bottom" :list="footerLinks" />
        <AppFooterBottom />
    </div>
</template>

<script>
import AppFooterTop from './AppFooterTop.vue';
import AppFooterBottom from './AppFooterBottom.vue';
export default {
    name: 'AppFooter',
    components: {
        AppFooterTop,
        AppFooterBottom,
    },
    data(){
        return {
            footerLinks: [
				[	// recent_posts
					{
						link_text: 'The best protein shake',
						link_href: '#',
					},
					{
						link_text: 'Ultimate cardio workout',
						link_href: '#',
					},
					{
						link_text: 'New juices available now',
						link_href: '#',
					},
					{
						link_text: 'Tips to find training partners',
						link_href: '#',
					},
					{
						link_text: '20 best healthy recipes',
						link_href: '#',
					},
				],
				[	// socials
					{
						social_name: 'Facebook',
						icon_name: 'fa-facebook-f',
						href: '#',
					},
					{
						social_name: 'Twitter',
						icon_name: 'fa-twitter',
						href: '#',
					},
					{
						social_name: 'YouTube',
						icon_name: 'fa-youtube',
						href: '#',
					},
					{
						social_name: 'Instagram',
						icon_name: 'fa-instagram',
						href: '#',
					},
					{
						social_name: 'LinkedIn',
						icon_name: 'fa-linkedin-in',
						href: '#',
					},
				],
				{	// contacts
					location: '4746 Tipple Road Michigan 48449',
					mobile: '1.800.000.0000',
					mail: 'info@your-company.com',
				},
			]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/appFooter' as *;
</style>
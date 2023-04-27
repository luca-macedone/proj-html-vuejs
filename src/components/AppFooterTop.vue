<template>
    <div class="py-5" id="app-footer-top">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4 d-flex flex-column align-items-center gap-4">
                    <img height="32" :src="state.getImageUrl('logo-2x.png')" class="" alt="Avada Logo">
                    <p class="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit eos error blanditiis aspernatur, temporibus libero sapiente labore fugit sit magni nam dolorem quas.
                    </p>
                    <div class="d-flex align-items-center justify-content-center gap-3" id="socials">
                        <font-awesome-icon :icon="'fa-brands ' + social.icon_name" v-for="social in socials"/>
                    </div>
                </div>
                <div class="col-12 col-lg-4 d-flex flex-column align-items-center gap-4">
                    <ul class="list-unstyled d-flex flex-column align-items-center gap-3" id="footer-latest-articles">
                        <li>
                            <h5 class="text-uppercase">Recent posts</h5>
                        </li>
                        <li v-for="post in recentPostList">
                            <font-awesome-icon class="me-1" icon="fa-solid fa-angle-right" />
                            <a class="text-decoration-none article" :href="post.link_href">{{ post.link_text }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-4 d-flex flex-column align-items-center" id="footer-contacts">
                    <h5 class="text-uppercase">Contact informations</h5>
                    <span class="my-3" id="footer-contacts-location">{{ contacts.location }}</span>
                    <span class="mb-1">Mobile: {{ contacts.mobile }}</span>
                    <span>Email: {{ contacts.mail }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {state} from '../state.js';
    export default {
        name: 'AppFooterTop',
        data() {
        return {
            state,
            recentPostList: [
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
            socials: [
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
            contacts: {
                location: '4746 Tipple Road Michigan 48449',
                mobile: '1.800.000.0000',
                mail: 'info@your-company.com',
            },
        }
    },
    }
</script>

<style lang="scss" scoped>
    @use '../assets/sass/partials/appFooterTop' as *;
</style>
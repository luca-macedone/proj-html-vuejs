<template>
    <div class="py-5" id="app-footer-top">
        <div class="container">
            <div class="row g-5 my-5">
                <div class="col-12 col-lg-4 d-flex flex-column align-items-center gap-4 text-center">
                    <img height="38" :src="state.getImageUrl('logo-2x.png')" class="" alt="Avada Logo">
                    <p class="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit eos error blanditiis aspernatur,
                        temporibus libero sapiente labore fugit sit magni nam dolorem quas.
                    </p>
                    <div class="d-flex align-items-center justify-content-center gap-3" id="socials">
                        <font-awesome-icon :icon="'fa-brands ' + social.icon_name" v-for="social in socials" />
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center gap-4">
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
                <div class="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center text-center"
                    id="footer-contacts">
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
import { state } from '../state.js';
export default {
    name: 'AppFooterTop',
    data() {
        return {
            state,
            recentPostList: this.list[0],
            socials: this.list[1],
            contacts: this.list[2],
        }
    },
    props: ['list'],
}
// console.log(this.list);
</script>

<style lang="scss" scoped>@use '../assets/sass/partials/appFooterTop' as *;</style>
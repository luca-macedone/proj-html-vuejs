<template>
    <div class="py-5" id="sponsor-list">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center text-center g-5" v-for="sponsor in sponsors">
                    <img class="img-fluid" width="150" :src="state.getImageUrl(sponsor.img_URL)" :alt="sponsor.name">
                    <AccentDecoration color="primary" />
                    <p>
                        {{ sponsor.description }}
                    </p>
                    <a class="text-decoration-none" :href="sponsor.link_href">
                        {{ sponsor.link_text }}
                        <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {state} from '../state.js';
    import AccentDecoration from './AccentDecoration.vue';
    export default {
        name: 'SponsorList',
        components: {
            AccentDecoration
        },
        data(){
            return {
                state,
                sponsors: [
                    {
                        name: 'Yoga Studio',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nemo dolore expedita laudantium dolor asperiores sed assumenda veritatis sint.',
                        img_URL: 'sponsor-1-2x.png',
                        link_href: '#',
                        link_text: 'Visit Yoga Studio',
                    },
                    {
                        name: 'Fitness Center',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nemo dolore expedita laudantium dolor asperiores sed assumenda veritatis sint.',
                        img_URL: 'sponsor-2-2x.png',
                        link_href: '#',
                        link_text: 'Join Fitness Center',
                    },
                    {
                        name: 'Fitness Club',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nemo dolore expedita laudantium dolor asperiores sed assumenda veritatis sint.',
                        img_URL: 'sponsor-3-2x.png',
                        link_href: '#',
                        link_text: 'Learn about FC',
                    },
                    {
                        name: 'Power Gym',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nemo dolore expedita laudantium dolor asperiores sed assumenda veritatis sint.',
                        img_URL: 'sponsor-4-2x.png',
                        link_href: '#',
                        link_text: 'Visit Power Gym',
                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/sponsorList' as *;
</style>
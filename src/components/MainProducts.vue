<template>
    <div class="mt-5">
        <div id="main-products">
            <div class="container">
                <div class="row g-5">
                    <div class="col-12 col-md-6 col-lg-4" v-for="product in productsList">
                        <div class="card border-0 shadow">
                            <img class="card-img rounded-0 border-0" :src="state.getImageUrl(product.img_URL)"
                                :alt="product.title">
                            <div class="card-img-overlay rounded-0 border-0">
                                <AccentDecoration color="light" />
                                <h2>
                                    {{ product.title }}
                                </h2>
                                <p>
                                    {{ product.quote }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 d-flex flex-column justify-content-center align-items-center py-5 quote">
                        <h2 class="w-100 w-md-50">
                            "{{ quote.text }}"
                        </h2>
                        <AccentDecoration color="accent" />
                        <div class="d-flex gap-3 align-items-center mb-5">
                            <img class="rounded-circle" :src="state.getImageUrl(quote.img_URL)" height="38"
                                :alt="quote.author">
                            <strong>{{ quote.author }}</strong>
                            <span>{{ quote.location }}</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AccentDecoration from './AccentDecoration.vue';
import { state } from '../state.js';
export default {
    name: 'MainProducts',
    data() {
        return {
            state,
            productsList: [
                {
                    title: 'Crossfit workout',
                    quote: 'Push your limits',
                    img_URL: 'service6-2x.jpg',
                },
                {
                    title: 'New gym apparel',
                    quote: 'Look good, feel good',
                    img_URL: 'box1-2x.jpg',
                },
                {
                    title: 'Team training',
                    quote: 'Find a partner',
                    img_URL: 'box3-2x.jpg',
                },
            ],
            quote: {
                text: 'How you respon to the challenge in the second half will determine what you become after the game, whether you are a winner or a loser.',
                author: 'Brad Johnson',
                location: 'Las Vegas',
                img_URL: 'avatar-1-2x.jpg',
            },
        }
    },
    components: {
        AccentDecoration,
    },
}
</script>

<style lang="scss" scoped>@use '../assets/sass/partials/mainProducts' as *;</style>
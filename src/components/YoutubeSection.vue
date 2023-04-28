<template>
    <section id="youtube-section">
        <div class="container-fluid mx-0 px-0">
            <div class="row g-5">
                <div class="col-12 col-md-6 position-relative" id="youtube-section-main-video">
                    <img class="img-fluid border-0" src="/src/assets/img/service15-2x.jpg" alt="">
                    <button class="btn rounded-circle player-btn position-absolute">
                        <font-awesome-icon icon="fa-solid fa-play" />
                    </button>
                </div>
                <div class="col-12 col-md-6 p-5" id="youtube-section-header">
                    <div class="ps-md-5 d-flex flex-column align-items-start justify-content-center gap-4">
                        <strong>
                            Tune up your workouts
                        </strong>
                        <h2>
                            The beast health & fitness advice online
                        </h2>
                        <div class="d-flex align-items-center gap-2">
                            <img class="img-fluid rounded-circle" src="/src/assets/img/unnamed.jpg" alt="">
                            <div class="d-flex flex-column gap-2">
                                <span>ThemeFusion</span>
                                <div class="input-group">
                                    <button class="btn youtube-btn rounded-0" id="youtube-subscribe-btn">
                                        <font-awesome-icon icon="fa-brands fa-youtube" class="me-1" />
                                        YouTube
                                    </button>
                                    <label for="youtube-subscribe-btn">999+</label>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia veniam culpa aspernatur ipsa,
                            excepturi facilis?</p>
                        <button class="btn rounded-pill call-to-action-btn youtube-btn">
                            <font-awesome-icon icon="fa-brands fa-youtube" class="me-1" />
                            Visit my YouTube channel
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row pb-5">
                <div class="col-12 d-flex justify-content-between align-items-center py-4">
                    <h3>Featured playlists</h3>
                    <span class="see-more-link">
                        View all videos
                        <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                </div>
                <div class="col-12 col-md-4" v-for="element in playlistElements">
                    <div class="card border-0 rounded-0 text-center videos">
                        <div class="position-relative">
                            <img :src="state.getImageUrl(element.img_URL)" class="card-img-top videos-img"
                                :alt="element.title">
                            <button class="btn rounded-circle player-btn position-absolute">
                                <font-awesome-icon icon="fa-solid fa-play" />
                            </button>
                        </div>
                        <div class="card-body">
                            <h5 class="">{{ element.title }}</h5>
                            <h6 class="">{{ element.text }}</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import { state } from '../state.js';
export default {
    name: 'YoutubeSection',
    data() {
        return {
            state,
            playlistElements: [
                {
                    img_URL: 'video2-2x.jpg',
                    title: 'Thing & clute workout',
                    text: 'Increase your mobility',
                },
                {
                    img_URL: 'video7-2x.jpg',
                    title: 'Lift, firm & perk up',
                    text: 'Fell young again',
                },
                {
                    img_URL: 'video9-2x.jpg',
                    title: 'Slim & trim yout waist',
                    text: 'Shed those extra pounds',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>@use '../assets/sass/partials/youtubeSection' as *;</style>
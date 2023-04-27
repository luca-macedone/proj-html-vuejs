<template>
    <section id="youtube-section">
        <div class="container-fluid mx-0 px-0">
            <div class="row g-5">
                <div class="col-12 col-md-6 position-relative" id="youtube-section-main-video">
                    <img class="img-fluid" src="/src/assets/img/service15-2x.jpg" alt="">
                    <button class="btn rounded-circle player-btn position-absolute">
                        <font-awesome-icon icon="fa-solid fa-play" />
                    </button>
                </div>
                <div class="col-12 col-md-6 p-5">
                    <div class="ps-5 d-flex flex-column align-items-start justify-content-center gap-4">
                        <strong>
                            Tune up your workouts
                        </strong>
                        <h2>
                            The beast health & fitness advice online
                        </h2>
                        <div class="d-flex align-items-center gap-2">
                            <img class="img-fluid rounded-circle"  src="/src/assets/img/unnamed.jpg" alt="">
                            <div class="d-flex flex-column gap-2">
                                <span>ThemeFusion</span>
                                <div class="input-group">
                                    <button class="btn youtube-btn rounded-0" id="youtube-subscribe-btn">
                                        <font-awesome-icon icon="fa-brands fa-youtube" class="me-1" />
                                        YouTube
                                    </button>
                                    <label class="input-label btn btn-outline-dark" for="youtube-subscribe-btn">999+</label>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia veniam culpa aspernatur ipsa, excepturi facilis?</p>
                        <button class="btn rounded-pill call-to-action-btn youtube-btn">
                            <font-awesome-icon icon="fa-brands fa-youtube" class="me-1" />
                            Visit my YouTube channel
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'YoutubeSection',
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/youtubeSection' as *;
</style>
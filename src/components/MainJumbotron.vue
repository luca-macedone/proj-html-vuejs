<template>
    <section id="jumbotron">
        <div class="container p-3">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="jumbo py-5">
                        <h2>Certified fitness professional</h2>
                        <h1>Take control of your health</h1>
                        <AccentDecoration color="accent"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit consequuntur necessitatibus autem.</p>
                        <div class="d-flex align-items-center gap-2">
                            <button class="btn rounded-pill call-to-action-btn">
                                <font-awesome-icon icon="fa-brands fa-youtube" class="me-1" />
                                Visit my YouTube channel
                            </button>
                            <button class="btn rounded-pill call-to-action-btn outline">
                                Buy Avada today
                                <font-awesome-icon icon="fa-solid fa-arrow-right" class="ms-1" />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="player h-100 d-flex align-items-center justify-content-center">
                        <button class="btn rounded-circle player-btn">
                            <font-awesome-icon icon="fa-solid fa-play" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AccentDecoration from './AccentDecoration.vue';
export default {
    name: 'MainJumbotron',
    components: { AccentDecoration, }
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/mainJumbotron' as *;
</style>
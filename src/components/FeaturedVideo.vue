<template>
    <section class="py-5" id="featured-video">
        <div class="container py-5">
            <div class="row py-5">
                <div class="col-12 d-flex flex-column align-items-center gap-3">
                    <button class="btn rounded-circle player-btn">
                            <font-awesome-icon icon="fa-solid fa-play" />
                        </button>
                    <h2>Corssfit workout of the day</h2>
                    <h3>November 15th, 2019</h3>
                    <a href="#" class="text-decoration-none">
                        View all videos
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'FeaturedVideo',
    }
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/featuredVideo' as *;
</style>
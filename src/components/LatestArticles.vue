<template>
    <section id="latest-articles">
        <div class="container py-5">
            <div class="row py-5">
                <div class="col-12 d-flex justify-content-between align-items-center py-4">
                    <h3>Latest articles</h3>
                    <span>
                        Read all articles
                        <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                </div>
                <div class="col-12 col-md-4" v-for="article in articlesList">
                    <div class="card border-0 rounded-0">
                        <div class="img-gradient">
                            <img :src="state.getImageUrl(article.img_URL)" class="card-img-top rounded-0"
                                :alt="article.title">
                        </div>
                        <div class="card-body">
                            <h5 class="">{{ article.title }}</h5>
                            <div class="">
                                <small>By {{ article.author }} | </small>
                                <small> {{ article.date }} | </small>
                                <small> {{ article.category }}</small>
                            </div>
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
    name: 'LatestArticles',
    data() {
        return {
            state,
            articlesList: [
                {
                    title: 'The best protein shake',
                    author: 'admin',
                    date: 'November 28th 2019',
                    category: 'Gym',
                    img_URL: 'blog4-2x.jpg'
                },
                {
                    title: 'Ultimate cardio workout',
                    author: 'admin',
                    date: 'November 26th 2019',
                    category: 'Gym',
                    img_URL: 'blog1-2x.jpg'
                },
                {
                    title: 'New juices available now',
                    author: 'admin',
                    date: 'November 21st 2019',
                    category: 'Gym',
                    img_URL: 'blog3-2x.jpg'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/latestArticles' as *;
</style>
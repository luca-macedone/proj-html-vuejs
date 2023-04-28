<template>
    <div class="py-5" id="activities-panel">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-12 col-md-6 col-lg-4" v-for="activity in activitiesList">
                    <div class="activity-card d-flex flex-column align-items-center gap-4">
                        <img class="img-fluid" :class="activity.img_URL === 'dumbbell.png'? 'rotate': ''" width="80" :src="state.getImageUrl(activity.img_URL)" :alt="activity.title">
                        <h3>{{ activity.title }}</h3>
                        <h4>{{ activity.subtitle }}</h4>
                        <p>{{ activity.text }}</p>
                        <a class="text-decoration-none" :href="activity.link_href">
                            {{ activity.link_text }}
                            <font-awesome-icon class="ms-2" icon="fa-solid fa-angle-right"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {state} from '../state.js';
    export default {
        name: 'ActivitiesPanel',
        data(){
            return {
                state,
                activitiesList: [
                    {
                        title: 'Team training',
                        subtitle: 'Find a partner',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, autem. Laborum quos accusantium.',
                        link_text: 'Find a partner',
                        link_href: '#',
                        img_URL: 'smartwatch.png',
                    },
                    {
                        title: 'Crossfit workout',
                        subtitle: 'Push your limits',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, autem. Laborum quos accusantium.',
                        link_text: 'Find a partner',
                        link_href: '#',
                        img_URL: 'dumbbell.png',
                    },
                    {
                        title: 'Weight loss plan',
                        subtitle: 'Shed those pounds',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, autem. Laborum quos accusantium.',
                        link_text: 'Find a partner',
                        link_href: '#',
                        img_URL: 'waist.png',
                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/sass/partials/activitiesPanel' as *;
</style>
<template>
    <div>
        <MainJumbotron />
    </div>
</template>

<script>
import MainJumbotron from './MainJumbotron.vue';
export default {
    name: 'AppMain',
    data() {
        return {

        }
    },
    components: {
        MainJumbotron,
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/appMain' as *;
</style>
<template>
    <div>
        <MainJumbotron />
        <MainProducts />
    </div>
</template>

<script>
import MainJumbotron from './MainJumbotron.vue';
import MainProducts from './MainProducts.vue';
export default {
    name: 'AppMain',
    components: {
        MainJumbotron,
        MainProducts
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/appMain' as *;
</style>
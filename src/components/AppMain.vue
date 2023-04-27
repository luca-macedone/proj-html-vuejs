<template>
    <div>
        <MainJumbotron />
        <MainProducts />
        <YoutubeSection />
        <MailingList />
    </div>
</template>

<script>
import MainJumbotron from './MainJumbotron.vue';
import MainProducts from './MainProducts.vue';
import YoutubeSection from './YoutubeSection.vue';
import MailingList from './MailingList.vue';
export default {
    name: 'AppMain',
    components: {
        MainJumbotron,
        MainProducts,
        YoutubeSection,
        MailingList,
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/appMain' as *;
</style>
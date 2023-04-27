<template>
    <div id="app-main">
        <MainJumbotron />
        <MainProducts />
        <YoutubeSection />
        <MailingList />
        <ActitivitiesPanel />
        <LatestArticles />
        <BuyProductBanner />
    </div>
</template>

<script>
import MainJumbotron from './MainJumbotron.vue';
import MainProducts from './MainProducts.vue';
import YoutubeSection from './YoutubeSection.vue';
import MailingList from './MailingList.vue';
import ActitivitiesPanel from './ActivitiesPanel.vue';
import LatestArticles from './LatestArticles.vue';
import BuyProductBanner from './BuyProductBanner.vue';

export default {
    name: 'AppMain',
    components: {
        MainJumbotron,
        MainProducts,
        YoutubeSection,
        MailingList,
        ActitivitiesPanel,
        LatestArticles,
        BuyProductBanner,

    }
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/appMain' as *;
</style>
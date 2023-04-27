<template>
    <div id="app-main">
        <MainJumbotron />
        <MainProducts />
        <YoutubeSection />
        <MailingList />
        <ActitivitiesPanel />
        <LatestArticles />
        <BuyProductBanner />
        <SponsorList />
        <FeaturedVideo />
        <AppFooter />
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
import SponsorList from './SponsorList.vue';
import FeaturedVideo from './FeaturedVideo.vue';
import AppFooter from './AppFooter.vue';

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
        SponsorList,
        FeaturedVideo,
        AppFooter,

    }
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/appMain' as *;
</style>
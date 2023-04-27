<template>
    <div>
        <MainJumbotron />
        <MainProducts />
        <YoutubeSection />
        <MailingList />
        <ActitivitiesPanel />
    </div>
</template>

<script>
import MainJumbotron from './MainJumbotron.vue';
import MainProducts from './MainProducts.vue';
import YoutubeSection from './YoutubeSection.vue';
import MailingList from './MailingList.vue';
import ActitivitiesPanel from './ActivitiesPanel.vue';
export default {
    name: 'AppMain',
    components: {
        MainJumbotron,
        MainProducts,
        YoutubeSection,
        MailingList,
        ActitivitiesPanel,
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/appMain' as *;
</style>
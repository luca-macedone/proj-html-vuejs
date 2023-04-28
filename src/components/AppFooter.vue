<template>
    <div>
        <AppFooterTop class="border-bottom" :list="list" />
        <AppFooterBottom />
    </div>
</template>

<script>
import AppFooterTop from './AppFooterTop.vue';
import AppFooterBottom from './AppFooterBottom.vue';
export default {
    name: 'AppFooter',
    components: {
        AppFooterTop,
        AppFooterBottom,
    },
    props: ['list'],
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/appFooter' as *;
</style>
<template>
    <div>
        <AppFooterTop class="border-bottom" />
        
    </div>
</template>

<script>
import AppFooterTop from './AppFooterTop.vue';
export default {
    name: 'AppFooter',
    components: {
        AppFooterTop,
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/appFooter' as *;
</style>
<template>
    <div id="app-footer-bottom">
        <div class="py-3 d-flex justify-content-center align-items-center">
            <font-awesome-icon icon="fa-solid fa-copyright" class="me-1"/>
            <span>Copyright 2012-2023 | Avada theme by <span class="emphasis">ThemeFusion</span> | All rights reserved | Powered by <span class="emphasis">WordPress</span></span>
        </div>
    </div>
</template>

<script>
import { faDice } from '@fortawesome/free-solid-svg-icons';

    export default {
    name: "AppFooterBottom",
    components: { faDice }
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/appFooterBottom' as *;
</style>
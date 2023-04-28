<template>
    <div id="app-footer-bottom">
        <div class="py-5 d-flex justify-content-center align-items-center flex-wrap gap-3">
            <span>
                <font-awesome-icon icon="fa-solid fa-copyright" class="me-1" />
                Copyright 2012-2023 
            </span>
            <span class="d-none d-md-inline-flex">|</span>
            <span> 
                Avada theme by 
                <span class="emphasis">ThemeFusion</span>
            </span>
            <span class="d-none d-md-inline-flex">|</span>
            <span> 
                All rights reserved 
            </span>
            <span class="d-none d-md-inline-flex">|</span>
            <span> 
                Powered by 
                <span class="emphasis">WordPress</span>
            </span>
            
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
<template>
    <div class="angle-decoration">
        <font-awesome-icon icon="fa-solid fa-angle-up" />
        <font-awesome-icon style="margin-left: -.35rem; margin-right: -.35rem;" icon="fa-solid fa-angle-up" />
        <font-awesome-icon icon="fa-solid fa-angle-up" />
    </div>
</template>

<script>
export default {
    name: 'AccentDecoration',
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/variables' as *;
.angle-decoration {
    margin: .75rem 0;
    font-weight: $s-light;
    color: $s-color-accent;
    font-size: $s-text-xxl;
}
</style>
<template>
    <div :class="color" class="angle-decoration">
        <font-awesome-icon icon="fa-solid fa-angle-up" />
        <font-awesome-icon style="margin-left: -.35rem; margin-right: -.35rem;" icon="fa-solid fa-angle-up" />
        <font-awesome-icon icon="fa-solid fa-angle-up" />
    </div>
</template>

<script>
export default {
    name: 'AccentDecoration',
    props: ['color'],
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/variables' as *;
.angle-decoration {
    margin: .25rem 0;
    font-weight: $s-light;
    font-size: $s-text-xxl;
}

.accent {
    color: $s-color-accent;
}

.primary {
    color: $s-color-primary;
}

.light {
    color: $s-color-light;
}
</style>
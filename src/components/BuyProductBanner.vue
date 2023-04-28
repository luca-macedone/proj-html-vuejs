<template>
    <section class="py-5" id="buy-product-banner">
        <div class="container py-5">
            <div class="row py-5">
                <div class="col-12 d-flex flex-column justify-content-center align-items-center gap-3 text-center">
                    <h2>
                        "I've failed over and over again in my life. And that is why I succeed."
                    </h2>
                    <AccentDecoration color="accent" />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nemo dolore expedita laudantium
                        dolor asperiores sed assumenda veritatis sint explicabo!
                    </p>
                    <button class="btn rounded-pill call-to-action-btn">
                        Buy Avada today
                        <font-awesome-icon icon="fa-solid fa-angle-right" class="me-1" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AccentDecoration from './AccentDecoration.vue';
export default {
    name: 'BuyProductBanner',
    components: {
        AccentDecoration,
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/sass/partials/buyProductBanner' as *;
</style>
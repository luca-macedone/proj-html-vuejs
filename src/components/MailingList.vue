<template>
    <section id="mailing-list">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-lg-9">
                    <h2 class="pt-5">
                        Join our mailing list today
                    </h2>
                    <h3>
                        Insider offers & flash sales in your inbox every week.
                    </h3>
                    <AccentDecoration class="py-3" color="accent"/>
                    <div class="row align-items-center gap-3 p-2 ">
                        <div class="col-12 col-lg-8">
                            <input type="text" class="border-0 rounded-pill" placeholder="Insert your email...">
                        </div>
                        <div class="col-12 col-lg-3">
                            <button class="btn rounded-pill call-to-action-btn">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <p class="py-5 text-center text-md-start">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ducimus eius repellendus aperiam voluptatibus perspiciatis, ea quidem quisquam asperiores sit?
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import AccentDecoration from './AccentDecoration.vue';
    export default {
        name: 'MailingList',
        components: {
            AccentDecoration,
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/sass/partials/mailingList' as *;
</style>
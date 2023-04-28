<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark ms-bg-dark py-4">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="../assets/img/logo.png" height="28" alt="">
                </a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center gap-3">
                        <li class="nav-item d-flex align-items-center gap-2 gap-lg-0" v-for="(link, index) in navbarLinks">
                            <a class="nav-link" :class="activeLink == index ? 'active' : ''" :href="link.href">{{ link.name
                            }}</a>
                            <span class="badge rounded-0 rounded-end py-2 px-1" :class="link.badge !== '' ? '' : 'd-none'">{{
                                link.badge }}</span>
                        </li>
                        <li class="nav-item mt-2 mt-lg-0 mx-0 mx-lg-2">
                            <button class="btn rounded-pill call-to-action-btn">Schedule a workout</button>
                        </li>
                        <li class="nav-item mt-2 mt-lg-0"> <!-- cart -->
                            <a class="nav-link">
                                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                            </a>
                        </li>
                        <li class="nav-item mt-2 mt-lg-0 d-flex align-items-center"> <!-- searchbar -->
                            <!-- <Transition v-show="!showSearchbar" name="fade"> -->
                            <!-- </Transition> -->
                            <button class="btn input-group nav-link" id="show-searchbar-btn"
                                :class="showSearchbar ? 'd-none' : ''" @click="showSearchbar = true">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </button>
                            <div class="d-flex gap-3" :class="showSearchbar ? '' : 'd-none'">
                                <div class="input-group">
                                    <button class="btn btn-light text-dark">
                                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                    </button>
                                    <input type="text" class="form-control" placeholder="search...">
                                    <button class="btn" id="close-searchbar-btn" @click="showSearchbar = false">
                                        <font-awesome-icon icon="fa-solid fa-x" />
                                    </button>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            activeLink: 0,
            showSearchbar: true,
            navbarLinks: this.list,
        }
    },
    props: ['list'],
}
</script>

<style lang="scss" scoped>@use '../assets/sass/partials/appHeader' as *;</style>
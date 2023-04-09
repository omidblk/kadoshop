<script setup>
import { useProducts } from '@/store/product';
import { useLastProducts } from '@/store/lastProducts'
const lists = await $fetch('/api/navbar')
const products = useProducts();
const lastProducts = useLastProducts();
products.getposts();
lastProducts.getLastProducts();

// //////////////   mobile menu
const showMenu = ref(false)
function showMobileMenu() {

    showMenu.value = !showMenu.value

}

</script>

<template>
    <header id="Header" class="header">
        <div class="container h-100">
            <div class="row h-100 d-md-flex justify-content-between">
                <button @click="showMobileMenu()" class="hamber-menu col-2 d-lg-none"><i
                        class="bi bi-list fs-1 "></i></button>
                <img src="https://placehold.jp/180x50.png" alt="logo" class="logo col-md-3 col-6">
                <NavigationApp class="nav-bar col-auto d-none d-lg-flex" :lists="lists" />
                <section class="col-md-2 col-4 user-info">
                    <a href="#">
                        <i class="bi bi-person-fill fs-4"></i>
                    </a>
                    <NuxtLink to="/cart">
                        <i class="bi bi-cart-fill fs-4"></i>
                    </NuxtLink>
                    <NuxtLink to="/favorite">
                        <i class="bi bi-heart-fill fs-4 d-none d-sm-flex"></i>
                    </NuxtLink>
                </section>
            </div>
        </div>
        <transition name="slide-fade">
            <div @click="showMobileMenu()" v-if="showMenu" class="modal-menu">
                <div class="mobile-menu">
                    <NavigationApp :ismobile="true" :lists="lists" />
                </div>
            </div>
        </transition>
    </header>
</template>

<style lang="scss">
@import '../assets/styles/main.scss';

#Header {
    position: fixed;
    width: 100%;
    height: 60px;
    color: white;
    background-color: $secondary;
    z-index: 99;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.281);

    .modal-menu {
        background-color: rgba(0, 0, 0, 0.445);
        width: 120vw;

        .mobile-menu {
            background-color: $secondary;
            height: 100vh;
            width: 40%;
        }
    }

    // animation
    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }

    .logo {
        align-self: center;
        height: 50px;
    }

    .user-info {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            margin: auto;
            padding: 0 10px;
            color: $primary;
            transition: all 500ms ease-in-out;

            &:hover {
                color: white;
            }
        }
    }

    .hamber-menu {
        color: white;
        background-color: transparent;
    }


}

@media (min-width:992px) and (max-width:1200px) {
    #Header {
        .logo {
            display: none;
        }
    }
}</style>

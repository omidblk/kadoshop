<script setup>
const lists = await $fetch('/api/navbar')

</script>

<template>
    <Header id="Header" class="header">
        <div class="container h-100">
            <div class="row h-100 d-md-flex justify-content-between">
                <button class="hamber-menu col-2 d-lg-none"><i class="bi bi-list fs-1 "></i></button>
                <img src="https://placehold.jp/180x50.png" alt="logo" class="logo col-md-3 col-6">
                <NavigationApp class="nav-bar col-auto d-none d-lg-flex" :lists="lists"/>
                <section class="col-md-2 col-4 user-info">
                    <a href="#">
                        <i class="bi bi-person-fill fs-4"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-cart-fill fs-4"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-heart-fill fs-4 d-none d-sm-flex"></i>
                    </a>
                </section>
            </div>
        </div>
    </Header>
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
    .hamber-menu{
        color: white;
        background-color: transparent;
    }


}
@media (min-width:992px) and (max-width:1200px){
   #Header{
    .logo{
        display: none;
    }
   } 
}
</style>
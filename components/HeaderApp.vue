<template>
        <Header id="Header" class="header">
            <div class="container h-100">
                <div class="row h-100">
                    <img src="https://placehold.jp/180x50.png" alt="logo" class="logo col-md-3">
                    <NavigationApp class="col-md-7"/>
                    <section class="col-md-2 user-info">
                        <a href="#">
                            <i class="bi bi-search fs-4"></i>
                        </a>
                        <a href="#">
                            <i class="bi bi-person-fill fs-4"></i>
                        </a>
                        <a href="#">
                            <i class="bi bi-cart-fill fs-4"></i>
                        </a>
                        <a href="#">
                            <i class="bi bi-heart-fill fs-4"></i>
                        </a>
                    </section>
                </div>
            </div>
        </Header>
</template>
<script setup>

</script>
<style lang="scss">
@import '../assets/styles/main.scss';
#Header{
    position: fixed;
    width: 100%;
    height: 60px;
    color: white;
    background-color: $secondary;
    z-index: 99;
    
    .logo{
        align-self: center;
        height: 50px;
    }
    .user-info{
        display: flex;
        align-items: center;
        justify-content: center;
        a{
            margin: auto;
            padding: 0 10px;
            color: $primary;
            transition: all 500ms ease-in-out;
            &:hover{
                color: white;
            }
        }
    }


}
        

</style>
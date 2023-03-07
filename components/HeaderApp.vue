<template>
        <Header id="Header" class="header">
            <div class="container h-100">
                <div class="row h-100">
                    <img src="https://placehold.jp/180x50.png" alt="logo" class="logo col-md-3">
                    <nav class="col-md-7 ">
                        <ul class="navigation">
                            <li><a href="#">خانه</a></li>
                            <li><a href="#">خانه</a></li>
                            <li><a href="#">خانه</a></li>
                            <li><a href="#">خانه</a></li>
                            <li><a href="#">خانه</a></li>
                            <li><a href="#">خانه</a></li>
                            
                            
                            
                        </ul>
                    </nav>
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
    nav{
        padding: 10px 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .navigation{
            width: 100%;
            display: flex;
            justify-content: center;
            li{
                transition: all 500ms ease-in-out ;
                a{
                    padding: 10px 20px;
                    font-size: 18px;
                }
                &:hover{
                    margin: 0 20px;
                }
            }
            
        } 
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
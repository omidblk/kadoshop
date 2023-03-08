<template>
    <div class="position-relative">
        <div id="carouselExample" class="carousel slide ">
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://placehold.jp/1028x450.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://placehold.jp/1028x450.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://placehold.jp/1028x450.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <section class="container onslider">
            <div class="row">
                <div class="search-box col-md-4 d-flex flex-column p-4 rounded text-center">
                    <h3>یک خرید هوشمندانه</h3>
                    <p>اگر به دنبال یک کادوی خاص هستی جای درستی اومدی
                        ما شما را در خرید یک کادوی خوب کمک میکنیم</p>
                    <input class="form-control" type="text" placeholder="برای کی میخوای خرید کنی؟">
                    <input class="form-control" type="text" placeholder="برای کی میخوای خرید کنی؟">
                    <input class="form-control" type="text" placeholder="برای کی میخوای خرید کنی؟">
                    <button class="mt-1">جستجو کن</button>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-7 d-flex flex-column justify-content-end">
                    <nav class="slider-nav d-flex justify-content-around rounded p-4">
                    <a class="d-flex flex-column p-2 rounded" href="#">
                        <img src="../assets/images/svgs/icons8-confetti-64.png" alt="">
                        <span class="mt-2">اکسسوری</span>
                    </a>
                    <a class="d-flex flex-column p-2 rounded" href="#">
                        <img src="../assets/images/svgs/icons8-confetti-64.png" alt="">
                        <span class="mt-2">اکسسوری</span>
                    </a>
                    <a class="d-flex flex-column p-2 rounded" href="#">
                        <img src="../assets/images/svgs/icons8-confetti-64.png" alt="">
                        <span class="mt-2">اکسسوری</span>
                    </a>
                    <a class="d-flex flex-column p-2 rounded" href="#">
                        <img src="../assets/images/svgs/icons8-confetti-64.png" alt="">
                        <span class="mt-2">اکسسوری</span>
                    </a>
                </nav>
                </div>
            </div>
        </section>
    </div>
</template>


<script setup>

</script>


<style lang="scss" >
@import '../assets/styles/main.scss';

.carousel {
    height: 650px;

    .carousel-indicators {
        button {
            width: 1rem;
            height: 1rem;
            border-radius: 100%;
            background-color: $primary;
            transition: all 500ms ease-in-out;

        }

        .active {
            width: 1.5rem;
            height: 1.5rem;

        }
    }
}
.onslider{
    position: absolute;
    top: 250px;
    right: 100px;

}
.search-box {
    background-color: rgba($color: #eee, $alpha: 0.5) ;
    h3{
        color: $primary;
    }
    input{
        
        transition: all 200ms linear;
        &:focus{
            border: none;
            box-shadow: none;
            border-bottom: 2px solid $secondary;
        }
    }
    button{
        color: white;
        display: block;
        background-color: $primary;
        padding: 10px;
        border-radius: inherit;
        transition: all 200ms linear;
        &:hover{
            background-color: rgba($color: $primary, $alpha: 0.7) ;
        }
    }
    
}
.slider-nav{
    z-index: 10;
    background-color: rgba($color: #eee, $alpha: 0.5) ;
    a{
        padding: 0 20px;
        background-color: rgba($color: $primary, $alpha: 0.0);
        transition: all 500ms ease-in;
        &:hover{
            background-color: rgba($color: $primary, $alpha: 0.2);
            
        }
    }
}

</style>
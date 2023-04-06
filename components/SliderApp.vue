
<script setup>
const lists = await $fetch('/api/navbar')
</script>



<template>
    <div class="">
        <div id="carouselExampleIndicators" class="carousel slide position-relative">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner  h-100">
                <div class="carousel-item active  h-100">
                    <img src="../assets/images/slider/first.jpg" class="d-block w-100 h-100"
                        alt="...">
                </div>
                <div class="carousel-item h-100">
                    <img src="../assets/images/slider/second.jpg" class="d-block w-100 h-100" alt="...">
                </div>
                <div class="carousel-item h-100">
                    <img src="../assets/images/slider/third.jpg" class="d-block w-100 h-100"
                        alt="...">
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
        <section class="container onslider">
                <div class="search-box d-flex flex-column p-4 rounded text-center">
                    <h3>یک خرید هوشمندانه</h3>
                    <p>اگر به دنبال یک کادوی خاص هستی جای درستی اومدی
                        ما شما را در خرید یک کادوی خوب کمک میکنیم</p>
                    <input class="form-control" type="text" placeholder="برای کی میخوای خرید کنی؟">
                    <input class="form-control" type="text" placeholder="برای کی میخوای خرید کنی؟">
                    <input class="form-control" type="text" placeholder="برای کی میخوای خرید کنی؟">
                    <button class="mt-1">جستجو کن</button>
                </div>
                <div class="d-flex flex-column justify-content-end">
                    <nav class="slider-nav d-flex justify-content-around rounded p-4">
                        <NuxtLink v-for="(item,index) in lists.list" :key="index" class="d-flex flex-column p-2 rounded" :to=item.address>
                            <img  :src=item.icon alt="icon">
                            <span class="mt-2 text-center h-100">{{ item.label }}</span>
                        </NuxtLink>
                    </nav>
                </div> 
        </section>
    </div>
</template>

<style lang="scss" >
@import '../assets/styles/main.scss';

.carousel {
    height: 90vh;
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

.onslider {
    position: absolute;
    top: 150px;
    right: 50px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 3rem;

}

.search-box {
    z-index: 10;
    background-color: rgba($color: #eee, $alpha: 0.5);

    h3 {
        color: $primary;
    }

    input {

        transition: all 200ms linear;

        &:focus {
            border: none;
            box-shadow: none;
            border-bottom: 2px solid $secondary;
        }
    }

    button {
        color: white;
        display: block;
        background-color: $primary;
        padding: 10px;
        border-radius: inherit;
        transition: all 200ms linear;

        &:hover {
            background-color: rgba($color: $primary, $alpha: 0.7);
        }
    }

}

.slider-nav {
    z-index: 10;
    background-color: rgba($color: #eee, $alpha: 0.5);

    a {
        padding: 0 20px;
        background-color: rgba($color: $primary, $alpha: 0.0);
        transition: all 500ms ease-in;

        &:hover {
            background-color: rgba($color: $primary, $alpha: 0.2);

        }
        img{
            height: 96px;
            width: 96px;
        }
    }
}
@media (max-width:500px) {
    .onslider {
        width: 75%;
    top: 80px;
    grid-template-columns: 1fr;
    gap: 10px;
    }.carousel{
        height: 100vh;
    }
}

@media (min-width:501px) and (max-width:768px) {
    .onslider {
        width: 75%;
    top: 80px;
    grid-template-columns: 1fr;
    gap: 10px;
    }.carousel{
        height: 100vh;
    }
}

@media (min-width:769px) {
    .onslider {
    top: 80px;
    right: 60px;
    grid-template-columns: 1fr;
    gap: 10px;
    }
    
}

@media (min-width:992px) {
    .onslider {
    top: 100px;
    right: 60px;
    grid-template-columns: 2fr 3fr;
    gap: 5rem;

}
}
</style>
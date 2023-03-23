<template>
    <article class="card rounded p-4 d-flex flex-column justify-content-between align-items-center">
        <a href="#" class=" d-flex flex-column justify-content-center align-items-center p-4">
            <img src="https://placehold.jp/200x200.png" alt="">
            <h2 class="product-name my-3">رز جاویدان</h2>
            <div class="price w-100 d-flex justify-content-between">
                <span class="fs-6 text-decoration-line-through">40000 تومان</span>
                <span class="offer rounded-pill px-2 d-flex justify-content-center align-items-center">20%</span>
            </div>
            <span class="fs-5 mt-2">32000 تومان</span>
        </a>
        <button class="rounded m-4 w-100 py-2">+ افزودن به سبد خرید</button>
        <div class="time-offer w-75">
            <span class="time-numeric">04 : 15 : 27</span>
            <div class="time-bar w-100">
                <div class="time-left rounded"></div>
            </div>
        </div>
    </article>
</template>

<script setup>
</script>


<style lang="scss">
@import "../assets/styles/main.scss";

.card {
    box-shadow: $box-shadow ;

    .product-name {
        font-size: 1.5rem;
    }

    .price {
        direction: ltr;

        .offer {
            color: white;
            background-color: rgb(236, 78, 78);
        }
    }

    button {
        color: white;
        background-color: $secondary;
        transition: all .2s linear;

        &:hover {
            color: black;
            background-color: $third;
        }

    }

    .time-offer {
        direction: ltr;

        .time-numeric {
            color: rgb(236, 78, 78);

        }

        .time-bar {
            background-color: bisque;
            direction: ltr;

            .time-left {
                height: 4px;
                width: 50px;
                background-color: rgb(236, 78, 78);

            }
        }
    }

}

</style>
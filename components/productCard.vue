<script setup>
const props = defineProps(['product'])
function finalPrice(){
    if (props.product.offer) {
        const price = props.product.price
        const offer = props.product.offer
        return price-(price*(offer/100))
    }else{
        return props.product.price
    }
}
const address = useRoute().path+'/'+props.product.name

</script>

<template>
    <article class="card rounded p-4 d-flex flex-column justify-content-between align-items-center">
        <NuxtLink :to="address" class="d-flex h-100 flex-column justify-content-center align-items-center p-4">
            <img :src="product.imgSrc.first" alt="">
            <h2 class="product-name my-3">{{ product.name }}</h2>
            <div v-if="product.offer!=null" class="price w-100 d-flex justify-content-between">
                <span class="fs-6 text-decoration-line-through">{{product.price}} تومان</span>
                <span class="offer rounded-pill px-2 d-flex justify-content-center align-items-center">{{product.offer}}%</span>
            </div>
            <span class="final-price fs-5 mt-auto fw-1">{{finalPrice()}} تومان</span>
        </NuxtLink>
        <div v-if="product.offer!=null" class="time-offer w-75">
            <span class="time-numeric">04 : 15 : 27</span>
            <div class="time-bar w-100">
                <div class="time-left rounded"></div>
            </div>
        </div>
        <button class="rounded m-4 w-100 py-2">+ افزودن به سبد خرید</button>
    </article>
</template>

<style lang="scss">
@import "../assets/styles/main.scss";

.card {
    box-shadow: $box-shadow ;
    img{
        height: 200px;
        width: 200px;
    }

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
    .final-price{
        color: $secondary;
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
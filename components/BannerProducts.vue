<script setup>
const props = defineProps(['label', 'address', 'products'])



</script>

<template>
    <section class="widget-product position-relative mb-4">
        <div class="widget-products d-flex flex-column flex-md-row justify-content-around align-items-center">
            <NuxtLink v-for="(item, index) in products" :key="index"
                class="d-flex flex-column justify-content-between align-items-center my-3 " :to="item.name">
                <img class="rounded" :src="item.imgSrc.first" alt="">
                <div class="product-name">
                    <p>{{ item.name }}</p>
                </div>
                <span class="price">{{ item.price }} تومان</span>
                <span>{{ item.rate }}</span>
            </NuxtLink>
        </div>
        <div class="label rounded-top d-flex justify-content-center align-items-center position-md-absolute">
            <NuxtLink class="text-center fs-4 rounded-top w-100 h-100 py-4" :to=address>{{ label }}</NuxtLink>
        </div>
    </section>
</template>

<style lang="scss">
@import '../assets/styles/main.scss';

.widget-product {
    .widget-products {
        background-color: white;
        img {
            width: 150px;
            height: 150px;
        }
        .product-name {
            height: 40px;
            overflow: hidden;
        }
        .price {
            color: $primary;
        }
    }
}

@media (max-width:769px) {
    .widget-product {
        display: flex;
        flex-direction: column;
        .widget-products{
            order: 2;
            border-radius: 0 0 10px 10px;
        }
        .label {
            margin-top: 3rem;
            order: 1;
            position: inherit;
            color: white;
            background-color: $secondary;
            transform: rotateZ(0deg);
        }
    }
}

@media (min-width:770px) {
    .widget-product {
        padding-right: 90px;
        .widget-products{
            border-radius: 10px 0 0 10px;
        }
        .label {
            position: absolute;
            width: 270px;
            color: white;
            background-color: $secondary;
            transform: rotateZ(90deg);
            right: -83px;
            top: 92px;
        }
    }
}</style>
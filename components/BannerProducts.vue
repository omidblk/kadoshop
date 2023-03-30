<script setup>
const props = defineProps(['label' , 'address' , 'products' ])

</script>

<template>
    <section class="last-product position-relative mb-4">
        <div class="last-products d-flex justify-content-around align-items-center rounded-end">
            <NuxtLink v-for="(item,index) in products" :key="index" class="d-flex flex-column justify-content-between align-items-center my-3 " to="/" >
                <img class="rounded" :src="item.imgSrc.first" alt="">
                <p>{{ item.name }}</p>
                <span class="price">{{ item.price }} تومان</span>
                <span>{{ item.rate }}</span>
            </NuxtLink>
        </div>
        <div class="label rounded-top d-flex justify-content-center align-items-center position-absolute">
            <NuxtLink class="text-center fs-4 rounded-top w-100 h-100 py-4" :to=address>{{ label }}</NuxtLink>
        </div>
    </section>
</template>

<style lang="scss">
@import '../assets/styles/main.scss';

.last-product {
    padding-right: 90px;

    .last-products {
        background-color: white;
        img{
            width: 150px;
            height: 150px;
        }

        .price {
            color: $primary;
        }
    }

    .label {
        width: 270px;
        color: white;
        background-color: $secondary;
        transform: rotateZ(90deg);
        right: -83px;
        top: 92px;
    }
}</style>
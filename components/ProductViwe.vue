<script setup>
import { useProducts } from '@/store/product'
const bestProducts = useProducts().bestProducts
console.log(bestProducts);
</script>


<template>
    <main class="product-view container d-flex flex-column align-items-center">
        <LazyBreadCrump class="align-self-start"/>
        <section class="products-view mt-4">
            <LazyProductCard v-for="(item , index) in bestProducts" :key="index" :product="item"/>
        </section>
        <LazyPaginationApp v-if="bestProducts.length>20" class="mt-4 d-none d-md-block"/>
        
    </main>
</template>

<style lang="scss">
@import "../assets/styles/main.scss";
.product-view{
    .products-view{
    display: grid;
    // grid-template-columns: repeat(4,1fr);
    gap: 10px;
}
}

@media (min-width:769px) {
    .products-view{
    grid-template-columns: repeat(2,1fr);
    }
}

@media (min-width:992px) {
    .products-view{
    grid-template-columns: repeat(4,1fr);
    }
}   
</style>
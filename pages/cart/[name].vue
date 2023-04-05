<script setup>
import { useProducts } from '@/store/product'
const products = useProducts()
const route = useRoute()
// ///////////////////////////////
const data = products.findProduct(route.params.name)
</script>
<template>
    <div>
        <SingleProduct :product="data"/>
    </div>
</template>
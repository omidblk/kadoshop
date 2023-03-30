<script setup>

import {useCounter} from '../../store/counter'
import { useProducts} from '@/store/product';
const products = useProducts();
console.log(products.products)




const counter = useCounter();
</script>

<template>
    <div>
        <h1>valentine Page</h1>
        <h2>count : {{ counter.count }}</h2>
        <button class="btn btn-primary" @click="counter.increment(2)">افزودن</button>
        <button class="btn btn-warning" @click="counter.decrement(2)">کاهش</button>
    </div>
</template>

<style lang="scss">
    
</style>
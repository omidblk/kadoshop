<script setup>
import { useProducts } from '@/store/product'
const bestProducts = useProducts().bestProducts
</script>
<template>
    <div>
        <LazyProductViwe :products="bestProducts"/>
    </div>
</template>
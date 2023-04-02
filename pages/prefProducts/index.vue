<script setup>
import { useProducts } from '@/store/product'
const prefProducts = useProducts().prefProducts
</script>
<template>
    <div>
        <LazyProductViwe :products="prefProducts"/>
    </div>
</template>
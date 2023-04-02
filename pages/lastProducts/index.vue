<script setup>
import { useLastProducts } from '@/store/lastProducts'
const lastProducts = useLastProducts().lastProducts
</script>
<template>
    <div>
        <LazyProductViwe :products="lastProducts"/>
    </div>
</template>
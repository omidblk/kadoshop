<script setup>
import {useFlowers} from '@/store/flowers'
useFlowers().getporducts()
const flowersProduct = useFlowers().products

</script>

<template>
    <div>
        <LazyProductViwe :products="flowersProduct"/>
    </div>
</template>
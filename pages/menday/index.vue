<script setup>
import {useMenday} from '@/store/menday'
useMenday().getporducts()
const mendayProduct = useMenday().products

</script>

<template>
    <div>
        <LazyProductViwe :products="mendayProduct"/>
    </div>
</template>
<script setup>
import {useGirlsday} from '@/store/girlsday'
useGirlsday().getporducts()
const girlsdayProduct = useGirlsday().products

</script>

<template>
    <div>
        <LazyProductViwe :products="girlsdayProduct"/>
    </div>
</template>
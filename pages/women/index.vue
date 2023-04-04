<script setup>
import {useWomenday} from '@/store/womenday'
useWomenday().getporducts()
const womenProducts = useWomenday().products

</script>

<template>
    <div>
        <LazyProductViwe :products="womenProducts"/>
    </div>
</template>
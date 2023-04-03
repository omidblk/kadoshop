<script setup>
import {useMariiage} from '@/store/mariiage'
useMariiage().getporducts()
const marriageProduct = useMariiage().products

</script>

<template>
    <div>
        <LazyProductViwe :products="marriageProduct"/>
    </div>
</template>
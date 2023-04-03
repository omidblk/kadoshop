<script setup>
import {useCalture} from '@/store/calture'
useCalture().getporducts()
const caltureProduct = useCalture().products

</script>

<template>
    <div>
        <LazyProductViwe :products="caltureProduct"/>
    </div>
</template>
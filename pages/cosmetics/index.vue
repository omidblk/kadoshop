<script setup>
import {useCosmetics} from '@/store/cosmetics'
useCosmetics().getporducts()
const cosmeticsProduct = useCosmetics().products

</script>

<template>
    <div>
        <LazyProductViwe :products="cosmeticsProduct"/>
    </div>
</template>
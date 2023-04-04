<script setup>
import {useSigars} from '@/store/sigars'
useSigars().getporducts()
const sigarsProduct = useSigars().products

</script>

<template>
    <div>
        <LazyProductViwe :products="sigarsProduct"/>
    </div>
</template>
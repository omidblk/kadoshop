<script setup>
import {useValentine} from '@/store/valentine'
useValentine().getporducts()
const valentineProducts = useValentine().products

</script>

<template>
    <div>
        <LazyProductViwe :products="valentineProducts"/>
    </div>
</template>
<script setup>
import {useBirthday} from '@/store/birthday'
useBirthday().getporducts()
const birthdayProduct = useBirthday().products
console.log(birthdayProduct);

</script>

<template>
    <div>
        <LazyProductViwe :products="birthdayProduct"/>
    </div>
</template>
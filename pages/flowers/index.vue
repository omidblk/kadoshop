<script setup>
import { useProductCategories } from '@/store/productsCategories'
const productsCategories = useProductCategories()
productsCategories.categorizeProducts
</script>

<template>
    <div>
        <h1>flowers Page</h1>
    </div>
</template>

<style lang="scss">
    
</style>
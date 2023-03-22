<template>
    <main class="product-view container d-flex flex-column align-items-center">
        <BreadCrump class="align-self-start"/>
        <section class="products-view mt-4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </section>
        <PaginationApp class="mt-4"/>
        
    </main>
</template>
<script setup>

</script>


<style lang="scss">
@import "../assets/styles/main.scss";
.product-view{
    .products-view{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
}
}

    
</style>
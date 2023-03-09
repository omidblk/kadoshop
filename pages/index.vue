<template>
    <div>
        <SliderApp />
        <div class="container">
            <section class="up-banners">
                <BannerApp />
                <BannerApp />
                <BannerApp />
            </section>
            <section class="between-banners">
                <BannerApp />
                <BannerApp />
            </section>
            <section class="down-banner mb-5">
                <BannerApp />
            </section>

            <!-- last-product -->
            <BannerProducts />

            <!-- best-product -->
            <BannerProducts/>

            <!-- best-product -->
            <BannerProducts/>
        
        </div>

    </div>
</template>
<script setup>

</script>


<style lang="scss">
@import '../assets/styles/main.scss';

.up-banners {
    height: 400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 2rem 0;
}

.between-banners {
    height: 400px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 2rem 0;
}

.down-banner {
    height: 400px;
    margin: 2rem 0;
}
</style>


<template>
    <div>
        <SliderApp />
        <section class="up-banners">
            <BannerApp/>
            <BannerApp/>
            <BannerApp/>
        </section>
        <section class="between-banners">
            <BannerApp/>
            <BannerApp/>
        </section>
        <section class="down-banner">
            <BannerApp/>
        </section>
    </div>
</template>
<script setup>

</script>


<style lang="scss">
@import '../assets/styles/main.scss';
.up-banners{
    height:400px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    margin: 2rem 10rem;
}
.between-banners{
    height:400px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 2rem;
    margin: 2rem 10rem;
}
.down-banner{
    height:400px;
    margin: 2rem 10rem;
}

</style>


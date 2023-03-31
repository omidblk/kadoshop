<script setup>
import { useLastProducts } from '@/store/lastProducts'
import { useProducts } from '@/store/product'
const list = await $fetch('/api/pageList')
const banner = await $fetch('/api/bannerInfo')
const listOfProducts = []
const lastProducts = useLastProducts().lastProducts.slice(0,4)
const prefProducts = useProducts().prefProducts.slice(0,4)
const bestProducts = useProducts().bestProducts.slice(0,4)
listOfProducts.push(lastProducts)
listOfProducts.push(prefProducts)
listOfProducts.push(bestProducts)





</script>


<template>
    <div>
        <SliderApp class="d-none d-md-block" />
        <div class="container">
            <section class="banner-app">
                <BannerApp v-for="(item,index) in list.list" :key="index" :label="item.label" :address="item.address" :src="item.src"/>
            </section>
            <BannerProducts v-for="(info,index) in banner.info" :key="index" :label="info.label" :address="info.address" :products="listOfProducts[index]" />
            
        </div>
        

    </div>
</template>

<style lang="scss">
@import '../assets/styles/main.scss';
@media (min-width:501px) and (max-width:768px) {
    .banner-app{
    display: grid;
    grid-template-columns: 1fr ;
    grid-auto-rows: 400px;
    gap: 2rem;
    }
}

@media (min-width:769px) {
    .banner-app{
    display: grid;
    grid-template-columns: repeat(6,1fr) ;
    grid-auto-rows: 400px;
    gap: 2rem;
    margin-bottom: 4rem;
    :nth-child(1){
        grid-column: 1/3;
    }
    :nth-child(2){
        grid-column: 3/5;
    }
    :nth-child(3){
        grid-column: 5/7;
    }
    :nth-child(4){
        grid-column: 1/4;
    }
    :nth-child(5){
        grid-column: 4/7;
    }
    :nth-child(6){
        grid-column: 1/7;
    }
}
}

</style>


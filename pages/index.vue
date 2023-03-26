<script setup>
const list = await $fetch('/api/pagelist')
console.log(list)
</script>


<template>
    <div>
        <SliderApp class="d-none d-md-block" />
        <div class="container">
            <section class="banner-app">
                <BannerApp v-for="(item,index) in list.list" :key="index" :label="list.list[index].label" :address="list.list[index].address" :src="list.list[index].src"/>
            </section>
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


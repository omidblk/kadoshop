<template>
    <div>
        <SliderApp class="d-none d-md-block" />
        <div class="container">
            <section class="banner-app">
                <BannerApp class="first-line item1"/>
                <BannerApp class="first-line item1"/>
                <BannerApp class="first-line item1"/>
                <BannerApp class="second-line"/>
                <BannerApp class="second-line"/>
                <BannerApp class="last-line"/>
            </section>
        </div>
        

    </div>
</template>
<script setup>

</script>


<style lang="scss">
@import '../assets/styles/main.scss';



@media (max-width:500px) {
    
}

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

@media (min-width:992px) {
    
}
@media (min-width:1200px) {

}
</style>


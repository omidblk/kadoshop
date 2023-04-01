<script setup>
</script>

<template>
    <section class="bread-crump d-none d-sm-flex my-2">
        <a class="mx-2" href="#"> صفحه اصلی</a>
        <span> / </span>
        <a class="mx-2" href="#"> صفحه اصلی</a>
        <span> / </span>
        <a class="mx-2" href="#"> صفحه اصلی</a>
        <span> / </span>
        <a class="mx-2 active" href="#"> صفحه اصلی</a>
        
    </section>
</template>


<style lang="scss">
@import '../assets/styles/main.scss';
.bread-crump{
    color: $secondary;
    a{
        transition: all 200ms linear;
        &:hover{
            color: white;
        }
    }
    .active{
        color: white;
    }
}
    
</style>
<template>
    <section class="bread-crump d-flex my-2">
        <a class="mx-2" href="#"> صفحه اصلی</a>
        <span> / </span>
        <a class="mx-2" href="#"> صفحه اصلی</a>
        <span> / </span>
        <a class="mx-2" href="#"> صفحه اصلی</a>
        <span> / </span>
        <a class="mx-2 active" href="#"> صفحه اصلی</a>
        
    </section>
</template>
<script>

</script>
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
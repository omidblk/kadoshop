<script setup>

const route = useRoute()
console.log(route.path);
</script>

<template>
    <section class="bread-crump d-none d-sm-flex my-2">
        <NuxtLink to="/">صفحه اصلی</NuxtLink>
        <NuxtLink class="active" :to="route.path">{{ route.path }}</NuxtLink>
        
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
<script setup>
// import { defineProps } from 'vue';
const props = defineProps(['lists'])
</script>

<template>
    <nav class=" d-flex  ">
        <ul class="navigation d-flex justify-content-evenly align-items-center">
            <li v-for="(item , index) in props.lists.navbar" :key="index"><NuxtLink :to= item.address >{{ item.label }}</NuxtLink></li>
        </ul>
    </nav>
</template>

<style lang="scss">
nav {
    .navigation {
        width: 100%;

        li {
            transition: all 500ms ease-in-out;

            a {
                padding: 10px 20px;
                font-size: 14px;
            }

            &:hover {
                margin: 0 20px;
            }
        }

    }
}
</style>
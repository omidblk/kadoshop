<script setup>
// import { defineProps } from 'vue';
const props = defineProps(['lists' , "ismobile"])
</script>

<template>
    <nav class=" d-flex  ">
        <ul class="navigation d-flex justify-content-evenly align-items-center" :class="{flexCol : ismobile}">
            <li v-for="(item , index) in props.lists.navbar" :key="index"><NuxtLink active-class="active" :to= item.address >{{ item.label }}</NuxtLink></li>
        </ul>
    </nav>
</template>

<style lang="scss">
nav {
    .flexCol{
        margin-top: 1rem;
        flex-direction: column;
        gap : 3rem
    }
    .navigation {
        width: 100%;
        .active{
            border-radius: 50%;
            border-bottom: solid 2px ;
        }

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
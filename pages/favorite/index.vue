<script setup>
import swal from 'sweetalert';
import { useFavorites } from '@/store/favorites'
const favorite = useFavorites()
function remove(id) {
    favorite.removeFromFav(id)
}
function emtyFavorites() {
    swal({
        title: "",
        text: "علاقه مندی ها حذف شدند !",
        icon: "error",
        button: "ادامه"
    })
    favorite.checkout()
}

</script>

<template>
    <div class="container">
        <section v-if="favorite.products.length > 0"
            class="main-favorite mt-4 p-2 rounded d-flex flex-column gap-5 justify-content-around align-items-center">
            <div v-for="(product, index) in favorite.products" :key="index"
                class="product-favorite-card rounded d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center w-100 position-relative">
                <NuxtLink :to=" useRoute().path+'/'+product.name" class="d-flex flex-column flex-md-row text-center">
                    <img class="product-image rounded"
                        :src="product.imgSrc.first" alt="">
                    <h3 class="px-2 my-auto">{{ product.name }}</h3>
                </NuxtLink>
                <span @click="remove(product.id)" class="delete-icon position-absolute top-0 end-0 m-3">
                    <i class="bi bi-x-lg fs-4 text-danger"></i>
                </span>
            </div>
            <div
                class="result d-flex d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center w-100">
                <div class="buttons-favorite d-flex flex-column flex-md-row gap-3">
                    <button @click="emtyFavorites()" class="rounded btn btn-danger">حذف علاقه مندی ها</button>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/main.scss";

.main-favorite {
    color: white;
    box-shadow: $box-shadow;

    .product-favorite-card {
        .product-image {
            height: 200px;
            width: 200px;
        }

        border: 2px solid $secondary;
        padding: 1rem;
        margin: 10px;

        .number-of-order {
            &:focus {
                outline: none;
            }
        }
    }

}</style>
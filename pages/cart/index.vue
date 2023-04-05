<script setup>
import swal from 'sweetalert';
import { useCart } from '@/store/cart'
const cart = useCart()
function totalPrice() {
    let totalPrice = null
    for (let i = 0; i < cart.products.length; i++) {
        const product = cart.products[i]
        totalPrice += product.price*product.numberOfOrder
    }
    return totalPrice
}
function remove(id) {
    cart.removeFromCart(id)
}

function checkout() {
    swal({
        title: "عالی",
        text: "خرید شما با موفقیت ثبت شد !",
        icon: "success",
        button: "ادامه"
    })
    cart.checkout()
}
function emtyCart() {
    swal({
        title: "",
        text: "سبد خرید خالی شد !",
        icon: "error",
        button: "ادامه"
    })
    cart.checkout()
}

</script>

<template>
    <div class="container">
        <section v-if="cart.products.length > 0"
            class="main-cart mt-4 p-2 rounded d-flex flex-column gap-5 justify-content-around align-items-center">
            <div v-for="(product, index) in cart.products" :key="index"
                class="product-cart-card rounded d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center w-100 position-relative">
                <NuxtLink :to=" useRoute().path+'/'+product.name" class="d-flex flex-column flex-md-row text-center">
                    <img class="product-image rounded"
                        :src="product.imgSrc.first" alt="">
                    <h3 class="px-2 my-auto">{{ product.name }}</h3>
                </NuxtLink>
                <div class="my-auto"><label for="numberoforder">تعداد : </label>
                    <input class="number-of-order m-auto rounded p-2" type="number">
                </div>
                <div class="total-price my-auto"> قیمت : {{ product.price }} تومان </div>
                <span @click="remove(product.id)" class="delete-icon position-absolute top-0 end-0 m-3">
                    <i class="bi bi-x-lg fs-4 text-danger"></i>
                </span>
            </div>
            <div
                class="result d-flex d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center w-100">
                <div class="buttons-cart d-flex flex-column flex-md-row gap-3">
                    <button @click="checkout()" class="rounded btn btn-success">تسویه حساب</button>
                    <button @click="emtyCart()" class="rounded btn btn-danger">حذف سبد خرید</button>
                </div>
                <div>
                    <span> تعداد کل محصولات : 4</span>
                </div>
                <div class="fs-3">
                    قیمت کل : <span>{{ totalPrice() }} تومان</span>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/main.scss";

.main-cart {
    color: white;
    box-shadow: $box-shadow;

    .product-cart-card {
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
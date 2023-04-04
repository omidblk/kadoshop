<script setup>
import swal from 'sweetalert';
//  banners
import { useLastProducts } from '@/store/lastProducts'
import { useProducts } from '@/store/product'
import { useCart } from '~~/store/cart';
const banner = await $fetch('/api/bannerInfo')
const listOfProducts = []
const lastProducts = useLastProducts().lastProducts.slice(0, 5)
const prefProducts = useProducts().prefProducts.slice(0, 5)
const bestProducts = useProducts().bestProducts.slice(0, 5)
listOfProducts.push(lastProducts)
listOfProducts.push(prefProducts)
listOfProducts.push(bestProducts)

// props
const props = defineProps(['product'])

////////     button events
// info buttons
let showExplain = ref([true, false, false])
function explain() {
    showExplain.value = [true, false, false]
}
function info() {
    showExplain.value = [false, true, false]
}
function comments() {
    showExplain.value = [false, false, true]
}
// add to cart button
function addToCart(product) {
    useCart().addToCart(product)
    swal({
        title: "عالی",
        text: "با موفقیت به سبد خرید اضافه شد !",
        icon: "success",
        button: "ادامه"
    })
};

    /////////  images 
    const images = ref(props.product.imgSrc)
    function img2() {
        const a = images.value.first
        images.value.first = images.value.second
        images.value.second = a
    }
    function img3() {
        const a = images.value.first
        images.value.first = images.value.third
        images.value.third = a
    }
</script>


<template>
    <div>
        <div class="container">
            <div class="row">
                <BreadCrump />
            </div>
            <div class="row">
                <article class="product-information d-flex flex-column p-5 rounded">
                    <span class="grade  ms-auto">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star-half"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </span>
                    <div class="d-flex flex-column flex-md-row justify-content-around align-items-center">
                        <div class="product-images d-flex flex-column align-items-center md-me-5 gap-3">
                            <transition key="1" mode="out-in">
                                <img class="main-pic" :src="images.first" :alt="product.name">
                            </transition>
                            <div class="d-flex justify-content-between gap-2">
                                <img class="small-pic" :src="images.first" :alt="product.name">
                                <img @click="img2()" v-if="Object.keys(images).length > 1" class="small-pic"
                                    :src="images.second" :alt="product.name">
                                <img @click="img3()" v-if="Object.keys(images).length > 2" class="small-pic"
                                    :src="images.third" :alt="product.name">
                            </div>
                        </div>
                        <section class="information flex-grow-1">
                            <div class="product-name d-flex justify-content-between align-items-center rounded p-2">
                                <h2 class="name">{{ product.name }}</h2>
                                <div class="icons fs-2 d-flex w-25 justify-content-around">
                                    <i @click="addToCart(product)" class="bi bi-cart-plus-fill "></i>
                                    <i class="bi bi-graph-up d-none d-md-flex"></i>
                                    <i class="bi bi-heart "></i>
                                </div>
                            </div>

                            <section class="product-detail position-relative mt-4">
                                <div
                                    class="product-details d-flex flex-column justify-content-between align-items-center rounded-end">
                                    <span>وضعیت : موجود</span>
                                    <span>روش ارسال : پیشتاز</span>
                                    <span>ضمانت سالم و اصل بودن</span>
                                    <span>تحویل یک روزه : تهران</span>
                                    <span>رنگ بندی : </span>
                                    <span>بسته ویژه ساب رزا</span>
                                    <span>قیمت : <span>{{ product.price }} <span>تومان</span></span></span>
                                </div>
                                <button @click="addToCart(product)" class="addToCart rounded mt-2 py-3 w-100">+ افزودن به
                                    سبد خرید</button>
                                <div
                                    class="label rounded-top d-flex justify-content-center align-items-center position-absolute">
                                    <a class="text-center fs-4 rounded-top w-100 h-100 py-2" href="#">اطلاعات محصول</a>
                                </div>
                            </section>

                        </section>
                    </div>
                </article>
            </div>
            <div class="row">
                <article class="more-information rounded mt-4 overflow-hidden">
                    <section class="labels d-flex align-items-center flex-md-column">
                        <button @click="explain()" :class="{ active: showExplain[0] }">
                            <h3>توضیحات</h3>
                        </button>
                        <button @click="info()" :class="{ active: showExplain[1] }">
                            <h3>مشخصات</h3>
                        </button>
                        <button @click="comments()" :class="{ active: showExplain[2] }">
                            <h3>نظرات</h3>
                        </button>
                    </section>
                    <section class="viwe-info">
                        <transition key="1" mode="out-in">
                            <p v-show="showExplain[0]">{{ product.information.caption }}</p>
                        </transition>
                        <transition key="2" mode="out-in">
                            <p v-show="showExplain[1]">{{ product.information.info }}</p>
                        </transition>
                        <transition key="3" mode="out-in">
                            <div v-show="showExplain[2]" class="show-comments">
                                <CommentCard :comments="product.information.comments" />
                            </div>
                        </transition>
                    </section>
                </article>
            </div>
            <div class="row">
                <BannerProducts class="mt-4" v-for="(info, index) in banner.info" :key="index" :label="info.label"
                    :address="info.address" :products="listOfProducts[index]" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/styles/main.scss';

.product-information {
    background-color: white;
    border: 2px solid $secondary;

    .grade {
        color: $primary;
    }

    .product-images {
        .main-pic {
            height: 300px;
            width: 300px;
        }

        .small-pic {
            height: 90px;
            width: 90px;
            cursor: pointer;
        }
    }

    .information {
        .product-name {
            background-color: $third;
            border: 2px solid $primary;

            .name {
                color: $secondary;
            }

            .icons {
                color: $secondary;
                i{
                    transition: all .2s ease-in;
                    cursor: pointer;
                    &:hover{
                        color: $primary;
                    }
                }
            }
        }
    }

    .product-detail {
        .product-details {
            height: 274px;
            margin-right: 10px;
            border: 2px solid $primary;
            padding-right: 40px;

            :nth-child(odd) {
                background-color: $third;

            }

            :last-child {

                font-size: 20px;
                font-weight: 500;
                padding: 10px;
            }

            span {
                text-align: center;
                padding: 5px 0;
                width: 100%;
            }

        }

        .addToCart {
            color: white;
            background-color: $secondary;
            transition: all 300ms linear;

            &:hover {
                color: black;
                background-color: $third;
            }

        }

        .label {
            width: 274px;
            color: white;
            background-color: $primary;
            transform: rotateZ(90deg);
            right: -110px;
            top: 111px;
        }

    }
}

.more-information {
    padding: 0;
    background-color: white;
    border: 2px solid $secondary;
    display: grid;

    .labels {
        background-color: $third;

        button {
            background-color: transparent;
            width: 100%;
            padding: 20px 0;
            text-align: center;
        }

        .active {
            color: white;
            background-color: $secondary;
        }


    }

    .viwe-info {
        padding: 1.5rem;
        padding-right: 5rem;

        .v-enter-active {
            transition: opacity 0.5s linear;
        }

        .v-enter-from,
        .v-leave-to {
            opacity: 0;
        }
    }
}

@media (min-width:501px) and (max-width:768px) {
    .information {
        margin-top: 20px;
    }
}

@media (min-width:769px) {
    .information {
        margin-top: 20px;
    }

    .more-information {
        grid-template-columns: 1fr 3fr;
    }

}

@media (min-width:992px) {
    .information {
        margin-right: 20px;
    }




}
</style>
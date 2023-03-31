<script setup>
import { useLastProducts } from '@/store/lastProducts'
import { useProducts } from '@/store/product'
const list = await $fetch('/api/pageList')
const banner = await $fetch('/api/bannerInfo')
const listOfProducts = []
const lastProducts = useLastProducts().lastProducts.slice(0, 5)
const prefProducts = useProducts().prefProducts.slice(0, 5)
const bestProducts = useProducts().bestProducts.slice(0, 5)
listOfProducts.push(lastProducts)
listOfProducts.push(prefProducts)
listOfProducts.push(bestProducts)


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
                        <div class="product-images d-flex flex-column align-items-center bg-primary md-me-5">
                            <img src="https://placehold.jp/310x310.png" alt="">
                            <div class="d-flex justify-content-between">
                                <img src="https://placehold.jp/90x90.png" alt="">
                                <img src="https://placehold.jp/90x90.png" alt="">
                                <img src="https://placehold.jp/90x90.png" alt="">

                            </div>
                        </div>
                        <section class="information flex-grow-1">
                            <div class="product-name d-flex justify-content-between align-items-center rounded p-2">
                                <h2 class="name">نام محصول</h2>
                                <div class="icons fs-2 d-flex w-25 justify-content-around">
                                    <i class="bi bi-cart-plus-fill "></i>
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
                                    <span>قیمت : <span>30000 <span>تومان</span></span></span>
                                </div>
                                <button class="addToCart rounded mt-2 py-3 w-100">+ افزودن به سبد خرید</button>
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
                        <a href="#" class="active">
                            <h3>توضیحات</h3>
                        </a>
                        <a href="#">
                            <h3>مشخصات</h3>
                        </a>
                        <a href="#">
                            <h3>نظرات</h3>
                        </a>
                    </section>
                    <section class="viwe-info">
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                            مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                            درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                            زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                            اساسا مورد استفاده قرار گیرد.</p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                            مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                            درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                            زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                            اساسا مورد استفاده قرار گیرد.</p>
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

    .information {
        .product-name {
            background-color: $third;
            border: 2px solid $primary;

            .name {
                color: $secondary;
            }

            .icons {
                color: $secondary;
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

        a {
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




}</style>
<template>
        <footer>
            <div class="position-relative svges">
                <div class="first-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366.686 299.358">
                        <path id="Path_1" data-name="Path 1"
                            d="M1436,2100s47.979-20,79.211-103.287,53.789,69.406,102.373,64.2,117.989-105.844,270.682-104.108S2163.84,2021,2295,2034.886s292.515-150.957,368-117.99,139.686-116.254,139.686-116.254V2100Z"
                            transform="translate(-1436 -1800.642)" fill="#ab37b4" />
                    </svg>
                </div>
                <div class="second-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1399.993 360.521">
                        <path id="Path_2" data-name="Path 2"
                            d="M1436,2161.164s49.148-24.086,81.142-124.39,55.1,83.587,104.868,77.318,120.865-127.469,277.279-125.379,282.289,77.317,416.646,94.034,299.644-181.8,376.969-142.1,143.09-140.007,143.09-140.007v360.521Z"
                            transform="translate(-1436 -1800.642)" fill="#fcd2ff" />
                    </svg>
                </div>

            </div>
            <section class="main-footer">
                <div class="container">
                    <div class="row">
                        <img src="https://placehold.jp/180x50.png" alt="logo" class="logo col-md-3">
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <section class="col-md-6 d-flex flex-column justify-content-around">
                            <h4 class="my-3">دسترسی سریع</h4>
                            <ul class="navigation d-flex align-items-center">
                                <li class=" m-2"><a class="p-3" href="#">خانه</a></li>
                                <li class=" m-2"><a class="p-3" href="#">خانه</a></li>
                                <li class=" m-2"><a class="p-3" href="#">خانه</a></li>
                                <li class=" m-2"><a class="p-3" href="#">خانه</a></li>
                                <li class=" m-2"><a class="p-3" href="#">خانه</a></li>
                                <li class=" m-2"><a class="p-3" href="#">خانه</a></li>
                            </ul>
                            <div class="contact-us mt-4">
                                <h4>اطلاعات تماس</h4>
                                <ul>
                                    <li>شماره تماس</li>
                                    <li>شماره تماس</li>
                                    <li>شماره تماس</li>
                                    <li>شماره تماس</li>
                                </ul>
                            </div>
                            <div class="buttons my-3">
                                <button class="rounded p-2 me-2">پیشنهاد محصول</button>
                                <button class="rounded p-2 me-2">ارسال پیام</button>
                                <button class="rounded p-2 me-2">راهنمای خرید</button>
                            </div>
                            <div class="d-flex justify-content-evenly social-icon">
                                <a href="#"><i class="bi bi-instagram fs-1"></i></a>
                                <a href="#"><i class="bi bi-telegram fs-1"></i></a>
                                <a href="#"><i class="bi bi-facebook fs-1"></i></a>
                            </div>
                        </section>
                        <section class="col-md-6">
                            <h4>از آخرین اخبار با خبر شوید</h4>
                            <div class="input-email d-flex mb-3">
                                <button class="rounded-start px-3">اشتراک</button>
                                <input type="text" class="w-100 rounded-end p-2" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" placeholder="ادرس ایمیل خود را وارد کنید">
                            </div>
                            <div class="mb-2">
                                

                            </div>

                        </section>
                    </div>
                </div>
            </section>
            <div class="d-flex justify-content-center align-items-center p-3">
                <p class="text-uppercase fs-4">طراحی شده توسط omidblk</p>
            </div>

        </footer>
</template>


<script setup>

</script>


<style lang="scss">
@import '../assets/styles/main.scss';

footer {
    .svges {
        .first-svg {
            position: absolute;
            width: 100%;
            bottom: 0;

        }

    }

    .main-footer {
        background-color: $secondary;

        li {
            color: white;
        }

        h4 {
            color: $primary;
        }

        .buttons {
            button {
                color: $primary;
                background-color: #fff;
                transition: all 200ms linear;

                &:hover {
                    background-color: rgba($color: #fff, $alpha: 0.8);
                }
            }
        }

        .input-email {
            button {
                color: #fff;
                background-color: #F569FF;
            }
        }
        .bi-instagram{
            transition: all 400ms ease-out;
            &:hover{
                color: #E4405F;
            }
        }
        .bi-facebook{
            transition: all 400ms ease-out;
            &:hover{
                color: #1877F2;
            }
        }
        .bi-telegram{
            transition: all 400ms ease-out;
            &:hover{
                color: #0099FF;
            }
        }
    }
}</style>
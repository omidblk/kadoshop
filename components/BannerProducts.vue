<template>
    <section class="last-product position-relative mb-4">
        <div class="last-products d-flex justify-content-around align-items-center rounded-end">
            <a class="d-flex flex-column justify-content-between align-items-center my-3 " href="#">
                <img class="rounded" src="https://placehold.jp/150x150.png" alt="">
                <p>نام محصول</p>
                <span class="price">قمیت محصول</span>
                <span>امتیاز محصول</span>
            </a>
        </div>
        <div class="label rounded-top d-flex justify-content-center align-items-center position-absolute">
            <a class="text-center fs-4 rounded-top w-100 h-100 py-4" href="#">آخرین محصولات</a>
        </div>
    </section>
</template>
<script>

</script>
<style lang="scss">
@import '../assets/styles/main.scss';

.last-product {
    padding-right: 90px;

    .last-products {
        background-color: white;

        .price {
            color: $primary;
        }
    }

    .label {
        width: 270px;
        color: white;
        background-color: $secondary;
        transform: rotateZ(90deg);
        right: -83px;
        top: 92px;
    }
}</style>
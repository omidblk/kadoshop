<template>
    <div class="container">
        <section class="main-cart mt-4 p-2 rounded d-flex flex-column gap-5 justify-content-around align-items-center">
            <div class="product-cart-card rounded d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center w-100">
                <div class="d-flex flex-column flex-md-row text-center"><img class="rounded" src="https://placehold.jp/200x200.png" alt="">
                <h3 class="px-2 my-auto">نام محصول</h3></div>
                <div class="my-auto"><label for="numberoforder">تعداد : </label>
                    <input class="number-of-order m-auto rounded p-2" type="number">
                </div>
                <div class="total-price my-auto"> قیمت : 3000000 تومان </div>
            </div>
            <div class="result d-flex d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center w-100">
                <div class="buttons-cart d-flex flex-column flex-md-row gap-3">
                    <button class="rounded btn btn-success">تسویه حساب</button>
                    <button class="rounded btn btn-danger">حذف سبد خرید</button>
                </div>
                <div>
                    <span> تعداد کل محصولات : 4</span>
                </div>
                <div>
                    قیمت کل : <span>3000000 تومان</span>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
</script>
<style lang="scss">
@import "../../assets/styles/main.scss";
.main-cart{
    color: white;
    box-shadow: $box-shadow;
    .product-cart-card{
        border: 2px solid $secondary;
        padding: 1rem;
        margin: 10px;
        .number-of-order{
            &:focus{
                outline: none;
            }
        }
    }

}

    
</style>
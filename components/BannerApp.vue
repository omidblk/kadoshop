<template>
    <section class=" w-100 h-100 valentine-baner position-relative rounded overflow-hidden m-3">
        <a href="#">
            <img class="w-100 h-100 rounded d-inline" src="../assets/images/product/v3-640x640.jpg" alt="">
            <span class="position-absolute bottom-0 start-0 m-4 px-3 rounded">ولنتاین</span>
            <div class="w-100 h-100 filter position-absolute top-0 start-0"></div>
        </a>
    </section>
</template>


<script>

</script>
<style lang="scss">
@import '../assets/styles/main.scss';

.valentine-baner {
    .filter {
        background-color: rgba(198, 146, 233, 0.5);
        transition: all 500ms linear;

        &:hover {
            background-color: rgba(198, 146, 233, 0);
        }
    }

    span {
        color: white;
        background-color: transparent;
        border: 2px solid white;
    }
}
</style>
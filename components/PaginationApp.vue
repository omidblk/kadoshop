<template>
    <nav class="pagination mt-4">
        <ul class="pagination-list d-flex">
            <li class=""><a href="#" class="rounded"> <i class="bi bi-caret-right-fill"></i> </a></li>
            <li class=""><a href="#" class="rounded">3</a></li>
            <li class=""><a href="#" class="rounded">3</a></li>
            <li class=""><a href="#" class="rounded">3</a></li>
            <li class=""><a href="#" class="rounded">3</a></li>
            <li class=""><a href="#" class="rounded"><i class="bi bi-caret-left-fill"></i></a></li>
        </ul>
    </nav>
</template>
<script>

</script>

<style lang="scss">
@import "../assets/styles/main.scss";
.pagination{
    .pagination-list{
        li{
            a{
                font-size: 1rem;
                padding: 5px 10px;
                border: 1px solid $secondary;

            }
        }
    }
}

</style>
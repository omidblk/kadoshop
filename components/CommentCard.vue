<script setup>
const props = defineProps(['comments'])

</script>

<template>
    <section v-for="(item, index) in comments" :key="index">
        <div class="comment-cart d-flex flex-column">
            <span class="user-info d-flex align-items-center mt-3">
                <img class="user-profile rounded-circle me-4" src="https://placehold.jp/50x50.png" alt="">
                <span class="user-name">{{ item.name }}</span>
                <span class="user-grade ms-auto pe-4">{{ item.grade }}</span>
            </span>
            <div class="user-comment rounded m-2">
                <p class="p-3 ">
                    {{ item.message }}
                </p>
            </div>

        </div>
    </section>
</template>

<style lang="scss">
.comment-cart {
    .user-name {
        .user-profile {
            height: 50px;
            width: 50px;
        }

    }

    .user-comment {
        border: solid 1px;
    }
}
</style>
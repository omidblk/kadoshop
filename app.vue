<script setup>
import { useProducts} from '@/store/product';
import { useLastProducts} from '@/store/lastProducts'
const products = useProducts();
const lastProducts = useLastProducts();
products.getposts();
lastProducts.getLastProducts();

</script>

<template>
  <div>
    
    <NuxtLayout>
      <HeaderApp/>
      <div class="behind-header"></div>
      <NuxtPage/>
      <FooterApp/>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
.behind-header{
  height: 60px;
  background-color: $secondary;
}
.page-enter-active,.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

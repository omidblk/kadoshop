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

<style lang="scss" scoped>
@import "./assets/styles/main.scss";
.behind-header{
  height: 60px;
  background-color: $secondary;
}
</style>

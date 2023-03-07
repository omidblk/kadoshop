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
.behind-header{
  height: 60px;
}
</style>

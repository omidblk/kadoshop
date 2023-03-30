import { defineStore } from "pinia";

export const useProducts = defineStore("products", {
  state: () => {
    return {
      products: null,
      prefProducts: [],
      bestProducts: [],
    };
  },
  actions: {
    //  get all of post from server
    async getposts() {
      try {
        const data = await $fetch("./products");
        this.products = data.products;

        //
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].offer != null) {
            this.prefProducts.push(this.products[i]);
          }
          if (this.products[i].rate >= 4.6) {
            this.bestProducts.push(this.products[i]);
          }
        }
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  getters:{
    
  }
});

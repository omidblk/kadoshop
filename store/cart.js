import { defineStore } from "pinia";

export const useCart = defineStore("cartShop", {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    addToCart(product) {
      if (this.products.length != 0) {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === product.id) {
            const index = this.products.indexOf(product);
            this.products[index].numberOfOrder++;
          } else {
            this.products.push(product);
            const index = this.products.indexOf(product);
            this.products[index].numberOfOrder = 1;
          }
        }
      }else{
        this.products.push(product);
        const index = this.products.indexOf(product);
        this.products[index].numberOfOrder = 1;
      }
    },
    removeFromCart(id) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id) {
          const index = this.products.indexOf(this.products[i]);
          this.products.splice(index, 1);
        }
      }
    },
    checkout() {
      this.products = [];
    },
  },
});

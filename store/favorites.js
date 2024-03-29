import { defineStore } from "pinia";

export const useFavorites = defineStore("FavoriteProducts", {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    addToFavorites(product) {
          this.products.push(product);
    },
    removeFromFav(id) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id) {
          this.products.splice(i, 1);
        }
      }
    },
  },
});

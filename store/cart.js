import { defineStore } from "pinia";

export const useCart = defineStore('cartShop',{
    state:()=>{
        return{
            products:[]
        }
    },
    actions:{
        addToCart(product){
            this.products.push(product)
        },
        removeFromCart(id){
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].id == id) {
                    const index = this.products.indexOf(this.products[i])
                    this.products.splice(index , 1)
                }
            }
        },
        checkout(){
            this.products = []
        }
    }
})
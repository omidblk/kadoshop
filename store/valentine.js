import { defineStore } from "pinia";

export const useValentine = defineStore('valentineProducts',{
    state:()=>{
        return{
            products:[]
        }
    },
    actions:{
        async getporducts() {
            try {
              const data = await $fetch("./products");
              for (let i = 0; i < Object.keys(data.products).length; i++) {
                if(data.products[i].id > 3000 && data.products[i].id < 4000){
                    this.products.push(data.products[i])
                }
              }
            } catch (error) {
              alert(error);
              console.log(error);
            }
        }
    }
})
import { defineStore } from "pinia";

export const useBirthday = defineStore('birthdayProducts',{
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
                if(data.products[i].id > 4000 && data.products[i].id < 5000){
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
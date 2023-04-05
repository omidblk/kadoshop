import { defineStore } from "pinia";

export const useCosmetics = defineStore('cosmeticsProducts',{
  state:()=>{
    return{
        products:[],
        send : 0
    }
},
actions:{
    async getporducts() {
        if(this.send == 0){
          try {
            const data = await $fetch("./products");
            for (let i = 0; i < Object.keys(data.products).length; i++) {
              if(data.products[i].id > 5000 && data.products[i].id < 6000){
                  this.products.push(data.products[i])
              }
            }
          } catch (error) {
            alert(error);
            console.log(error);
          }
          this.send = 1
        }
    }
}
})
import { defineStore } from "pinia";

export const useMenday = defineStore('mendayProducts',{
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
              if(data.products[i].id > 7000 && data.products[i].id < 8000){
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
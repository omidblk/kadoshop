import { defineStore } from "pinia";
import { useProducts } from "./product";


export const useProductCategories = defineStore("productCategories" , {
    state:()=>{
        return {
            flowersProducts:[],
            sigarsProducts:[],
            valentineProducts:[],
            birthdayProducts:[],
            cosmeticsProducts:[],
            caltureProducts:[],
            mendayProducts:[],
            girlsdayProducts:[],
            womendayProducts:[],
            mariiageProducts:[]
        }
    },
    getters:{
        categorizeProducts(state){
            const products = useProducts().products
            for (let i = 0; i < products.length; i++) {
               console.log(products[i].id)
               if (products[i].id>=1000 && products[i].id<=2000) {
                state.flowersProducts.push(products[i])
               }else if(products[i].id>=2000 && products[i].id<=3000){
                state.sigarsProducts.push(products[i])
               
               }else if(products[i].id>=3000 && products[i].id<=4000){
                state.valentineProducts.push(products[i])
               
               }else if(products[i].id>=4000 && products[i].id<=5000){
                state.birthdayProducts.push(products[i])
               
               }else if(products[i].id>=5000 && products[i].id<=6000){
                state.cosmeticsProducts.push(products[i])
               
               }else if(products[i].id>=6000 && products[i].id<=7000){
                state.caltureProducts.push(products[i])
               
               }else if(products[i].id>=7000 && products[i].id<=8000){
                state.mendayProducts.push(products[i])
               
               }else if(products[i].id>=8000 && products[i].id<=9000){
                state.girlsdayProducts.push(products[i])
               
               }else if(products[i].id>=9000 && products[i].id<=10000){
                state.womendayProducts.push(products[i])
               }else{
                state.mariiageProducts.push(products[i])
               }
               
           }
        }
    }
})
import { defineStore } from "pinia";


export const useLastProducts = defineStore("lastProducts",{
    state:()=>{
        return {
            lastProducts :[]
        }
    },
    actions:{
        async getLastProducts(){
            try {
                const data = await $fetch("./lastProducts");
                this.lastProducts = data.lastProducts
            } catch (error) {
                console.log(error)
            }
        },
        
    }

})
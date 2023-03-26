export default defineEventHandler((event)=>{
    return{
        info:[
            {
                label:"آخرین محصولات",
                address :"/lastProducts"
            },
            {
                label:"پیشنهاد ویژه",
                address :"/prefProducts"
            },
            {
                label:"پرفروش ترین ها",
                address :"/bestProducts"
            },
        ]
    }
})
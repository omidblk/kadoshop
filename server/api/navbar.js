export default defineEventHandler((event)=>{
    return{
        navbar:[
            {
                label : "صفحه اصلی",
                address : "/"
            },
            {
                label : "گل",
                address : "/flowers"
            },
            {
                label : "سیگار",
                address : "/sigars"
            },
            {
                label : "ولنتاین",
                address : "/valentine"
            },
            {
                label : "درباره ی ما",
                address : "/about-us"
            },
            {
                label : "تماس با ما",
                address : "/contact-us"
            },
            {
                label : "پشتیبانی",
                address : "/support"
            },
        ],
        list:[
            {
                label : "گل",
                address : "/flowers",
                icon:"/_nuxt/assets/images/svgs/icons8-bouquet-96.png"
            },
            {
                label : "سیگار",
                address : "/sigars",
                icon:"/_nuxt/assets/images/svgs/icons8-cigar-96.png"
            },
            {
                label : "تولد",
                address : "/birthday",
                icon:"/_nuxt/assets/images/svgs/icons8-confetti-64.png"
            },
            {
                label : "لوازم آرایشی",
                address : "/cosmetics",
                icon:"/_nuxt/assets/images/svgs/icons8-cosmetics-96.png"
            },
            {
                label : "محصولات فرهنگی",
                address : "/calture",
                icon:"/_nuxt/assets/images/svgs/icons8-picture-96.png"
            },
        ]
    }
})
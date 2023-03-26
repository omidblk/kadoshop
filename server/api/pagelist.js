export default defineEventHandler((event) => {
  return {
    list: [
      {
        label: "ولنتاین",
        src: "/_nuxt/assets/images/banner-list/valentine.jpg",
        address: "/valentine"
      },
      {
        label: "روز مرد",
        src: "/_nuxt/assets/images/banner-list/menday.jpg",
        address: "/menday"
      },
      {
        label: "روز دختر",
        src: "/_nuxt/assets/images/banner-list/girlsday.jpg",
        address: "/girlsday"
      },
      {
        label: "خانومانه",
        src: "/_nuxt/assets/images/banner-list/women.jpg",
        address: "/women"
      },
      {
        label: "تولد",
        src: "/_nuxt/assets/images/banner-list/birthday.jpg",
        address: "/birthday"
      },
      {
        label: "سالگرد ازدواج",
        src: "/_nuxt/assets/images/banner-list/mariiage.jpg",
        address: "/mariiage"
      },
    ],
  };
});

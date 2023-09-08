import { createRouter, createMemoryHistory } from "vue-router";
import BodyWeb from "../components/BodyWeb.vue";
import FeaturedProduct from "../components/FeaturedProduct.vue";
import BestSellerPro from "../components/BestSellerPro.vue"
import HomeProject from "../App/Home.vue"
import CatalogueProject from "../App/Catalogue.vue"
const routes = [
    { path: '/', component: HomeProject },
    { path: '/BodyWeb', component: BodyWeb },
    { path: "/FeaturedProduct", component: FeaturedProduct },
    { path: "/BestSellerPro", component: BestSellerPro },
    { path: '/catalogue', component: CatalogueProject }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router
import { createRouter, createMemoryHistory } from "vue-router";
import BodyWeb from "../components/BodyWeb.vue";
import FeaturedProduct from "../components/FeaturedProduct.vue";
import BestSellerPro from "../components/BestSellerPro.vue"
const routes = [
    { path: '/BodyWeb', component: BodyWeb },
    { path: "/FeaturedProduct", component: FeaturedProduct },
    { path: "/BestSellerPro", component: BestSellerPro }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router
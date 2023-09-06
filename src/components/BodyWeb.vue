<template>
  <div class="container">
    <CollectionsProduct />
    <FeaturedProduct />
    <BestSellerPro />
    <IntroProduct />
    <Journal />
    <FooterWeb />
  </div>
</template>

<script>
import FooterWeb from "./FooterWeb.vue";
import BestSellerPro from "./BestSellerPro.vue";
import CollectionsProduct from "./Collections.vue";
import FeaturedProduct from "./FeaturedProduct.vue";
import IntroProduct from "./IntroProduct.vue";
import Journal from "./Journal.vue";
export default {
  name: "BodyWeb",
  components: {
    CollectionsProduct,
    FeaturedProduct,
    BestSellerPro,
    IntroProduct,
    Journal,
    FooterWeb,
  },
};
</script>

<style lang="css" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>>
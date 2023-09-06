<template>
  <div class="shop-menu">
    <div class="title">
      <h1>Shop These Deals</h1>
    </div>

    <div class="product-menu-list">
      <div class="product-all" v-for="product in products" :key="product">
        <div class="product">
          <img class="img-product" :src="product.img" alt="" />
          <p class="text-product">{{ product.text }}</p>
          <p class="price-product">{{ product.price }}</p>
          <button class="btn-add-cart">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "ShopMenu",
  computed: {
    products() {
      const store = useStore();
      console.log(store.state.productDeals);
      return store.state.productDeals;
    },
  },
};
</script>

<style scoped>
.shop-menu {
  padding: 82px 20px 80px;
}
.title {
  margin: 0px 8px 16px;
}
.product-menu-list {
  display: flex;
}
.img-product {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  padding-bottom: 16px;
}
.product {
  margin: 0 8px;
}
.btn-add-cart {
  border: none;
  outline: none;
  background-color: #3a837e;
  width: 100%;
  border-radius: 10px;
  margin: 0;
  height: 45px;

  color: white;
  font-weight: 700;
  font-size: 16px;
}
.text-product,
.price-product,
.btn-add-cart {
  margin: 8px 0;
}
</style>
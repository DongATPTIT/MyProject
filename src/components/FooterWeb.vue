<template>
  <div class="footer">
    <div class="container">
      <div class="content">
        <img :src="img" alt="" />
      </div>
      <div class="infors">
        <div class="infor-all">
          <div class="infor-shop infor">
            <h1 style="font-size: 18px">SHOP</h1>
            <ul class="shop-list">
              <li>Men's Accessories</li>
              <li>Men's Fashion</li>
              <li>Men's Swimwear</li>
              <li>Men's Innerwear</li>
              <li>Shop All</li>
            </ul>
          </div>
          <div class="infor-about infor">
            <h1 style="font-size: 18px">ABOUT</h1>
            <ul class="shop-list">
              <li>Men's Accessories</li>
              <li>Men's Fashion</li>
              <li>Men's Swimwear</li>
              <li>Men's Innerwear</li>
              <li>Shop All</li>
            </ul>
          </div>
          <div class="infor-account infor">
            <h1 style="font-size: 18px">ACCOUNT</h1>
            <ul class="shop-list">
              <li>About Us</li>
              <li>Blog</li>
              <li>Reviews</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div class="infor-company infor">
            <h1 style="font-size: 18px">SHOP</h1>
            <ul class="shop-list">
              <li>
                Effortless is a quick-launch value concept that is optimized for
                success.
              </li>
              <li>Learn More</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "FooterWeb",
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  computed: {
    img() {
      const store = useStore();
      return store.state.navbar.img;
    },
  },
};
</script>

<style scoped>
.content {
  padding-bottom: 60px;
}
.infor-all {
  display: flex;
}
.infor {
  width: 24%;
}
.shop-list li {
  list-style: none;
  font-size: 16px;
  padding: 10px 0;
  cursor: pointer;
}
.shop-list li:hover {
  text-decoration: underline;
}
</style>
<template>
  <div class="container">
    <div class="content">
      <h1>Best Sellers</h1>
      <div class="icon-arrow">
        <LeftOutlined class="icons left" @click="moveLeft" />
        <RightOutlined class="icons" @click="moveRight" />
      </div>
    </div>
    <swiper
      :slidesPerView="4"
      :spaceBetween="15"
      :modules="modules"
      class="mySwiper"
      @swiper="onSwiper"
    >
      <swiper-slide
        class="product-details"
        style="margin-right: 15px; width: 25%"
        v-for="product in productSeller"
        :key="product"
      >
        <div class="card-inner">
          <div class="media">
            <img :src="product.img" alt="" />
          </div>

          <div class="cart-badge">
            <div class="badge-new">{{ product.content }}</div>
          </div>

          <div class="link-wrapper">
            <button class="btn-quick">Quick view</button>
          </div>
          <div class="icon-eye">
            <EyeOutlined />
          </div>
        </div>

        <div class="cart-details">
          <div class="details-container">
            <span class="title-details">{{ product.title }}</span>
          </div>

          <div class="price-details">
            <div class="price-sale">{{ product.price }}</div>
            <div class="cost">{{ product.cost }}</div>
          </div>

          <div class="colors">
            <div
              :style="{ backgroundColor: color }"
              class="color"
              v-for="(color, index) in product.color"
              :key="index"
              :class="{
                active: states.selectColorBestSeller[index].isActiveBestSeller,
              }"
              @click="activeColorBestSeller(index)"
            ></div>
          </div>

          <div class="product-lable">
            <component class="icon" :is="product.icon" />
            <div class="text-lable">{{ product.text }}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation } from "swiper/modules";
// import { Pagination } from "swiper/modules";
import { useStore } from "vuex";
import {
  LeftOutlined,
  RightOutlined,
  EyeOutlined,
  DingtalkOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "BestSellerPro",
  components: {
    LeftOutlined,
    RightOutlined,
    EyeOutlined,
    DingtalkOutlined,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    const states = store.state;
    const productSeller = store.state.bestSellers;
    store.getters.getColorBestSeller.map((color) => {
      store.commit("initBoxesColorBestSeller", color.length);
    });
    const activeColorBestSeller = (index) => {
      store.commit("activeColorBestSeller", index);
    };

    return {
      productSeller,
      modules: [Navigation],
      activeColorBestSeller,
      states,
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },
    moveLeft() {
      this.swiperInstance.slidePrev();
    },
    moveRight() {
      this.swiperInstance.slideNext();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1192px;
  margin: 0 auto;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.icons {
  border: 1px solid;
  padding: 7px;
}
.left {
  margin-right: 10px;
}
.product {
  /* width: 23%;
  margin: 0 3px; */
}
.media img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
.cart-badge {
  position: absolute;
  top: 0;
  padding: 5px;
  color: #fff;
  background: #000;
}
.colors,
.price-details,
.product-lable {
  display: flex;
}
.cost {
  padding-left: 15px;
  text-decoration: line-through #ccc;
  color: #ccc;
}
.color {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 5px;
}
.product-lable {
  padding: 5px 10px;
  border: 1px solid;
  display: inline-flex;
}
.media,
.price-details,
.colors,
.product-lable,
.details-container {
  margin-bottom: 10px;
}
.icon-eye {
  border-radius: 50%;
  font-size: 20px;
  padding: 10px;
  top: 5px;
  background: #fff;
  right: 5px;
  position: absolute;
}
.link-wrapper {
  position: absolute;
  bottom: 22px;
  left: 12px;
  width: 100%;
}
.icon-eye,
.link-wrapper {
  display: none;
  cursor: pointer;
}

.btn-quick {
  border: none;
  color: #fff;
  font-weight: 800;
  background: #3a837a;
  padding: 10px;
  box-shadow: 0 0 21px #0000006b;
  font-variant: JIS04;
  width: 100%;
  max-width: 90%;
  cursor: pointer;
}
.product-details {
  position: relative;
}
.product-details:hover .icon-eye,
.product-details:hover .link-wrapper {
  display: inline-block;
}
.card-inner {
  display: flex;
  position: relative;
}
.active {
  border: 2px solid #3a837a;
}
</style>
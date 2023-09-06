<template>
  <div class="container">
    <div class="featured-wrap">
      <h1 class="featured-text">Featured Product</h1>

      <div class="featured-products-container">
        <div class="featured-products-all">
          <div class="featured-products">
            <div class="products-template-all">
              <div
                class="products-template"
                v-for="(product, index) in products"
                :key="index"
                :class="{ active: index === currentSlideFured }"
              >
                <img :src="product.img" alt="" />
              </div>
            </div>

            <div class="product-zoom">
              <div
                class="slide-info-featured"
                v-for="(slide, index) in featuredProducts"
                :key="index"
              >
                <div class="slide-featured">
                  <transition name="slide-featured">
                    <div v-show="currentSlideFured === index + 1">
                      <slot />
                      <img
                        class="img"
                        :src="
                          require(`../assets/BodyVue/FeateredProduct/${slide}.png`)
                        "
                        alt=""
                      />
                      <div class="carousel-featured">
                        <slot :currentSlideFured="currentSlideFured" />
                        <!-- Navigation -->
                        <div class="navigation">
                          <div @click="prevSlideFured" class="toggle-page left">
                            <LeftOutlined />
                          </div>
                          <div
                            @click="nextSlideFured()"
                            class="toggle-page right"
                          >
                            <RightOutlined />
                          </div>
                        </div>
                        <!-- Pagination -->
                        <!-- <div class="pagination-featured">
                          <span
                            @click="goToSlide(index)"
                            v-for="(slide, index) in getSlideCountFured"
                            :key="index"
                            :class="{ active: index + 1 === currentSlideFured }"
                          >
                          </span>
                        <-- </div> -->
                      </div>
                    </div>
                  </transition>
                </div>
              </div>

              <div class="badges">Badges</div>
              <div class="icon-zoom">
                <FullscreenOutlined />
              </div>
            </div>
          </div>
        </div>

        <div class="product-content">
          <h2 class="title-product">Men Slim Fit Casual Shirt</h2>
          <p class="tock-quality">In stock</p>

          <div class="price-box">
            <div class="price-sale">
              <p class="sale-price">{{ getPriceForActiveSizeAndColor() }}</p>
              <p class="cost">{{ getCost() }}</p>
            </div>
            <div class="options">
              <div class="options-color">
                <div class="getColor">
                  <p>Color:</p>
                  <p class="title">{{ getColor() }}</p>
                </div>
                <div class="color-all">
                  <div
                    class="color"
                    v-for="(color, index) in uniqueColors"
                    :key="index"
                    :style="{ backgroundColor: color }"
                    :class="{
                      'active-color':
                        statePro.selectColorMen[index].isActiveColor,
                    }"
                    @click="activeBoxColor(index)"
                  ></div>
                </div>
              </div>

              <div class="options-size">
                <div class="getSize">
                  <p>Size:</p>
                  <p class="title">{{ getSize() }}</p>
                </div>
                <div class="size-all">
                  <div
                    v-for="(size, index) in uniqueSizes"
                    :key="index"
                    :class="{
                      activeSize: statePro.selectSizeMen[index].isActive,
                      'sout-out': size.quatity === 0,
                    }"
                    @click="activateBox(index)"
                    class="sizes"
                  >
                    <p class="size">{{ size }}</p>
                  </div>
                </div>
              </div>

              <div class="quality-lable">
                <p class="quality-text">Quantity</p>
                <div class="quality-main">
                  <div @click="reduceProduct()">
                    <MinusOutlined />
                  </div>
                  <input
                    class="input"
                    type="number"
                    v-model="states.coutProduct"
                  />
                  <div @click="incrementProduct()">
                    <PlusOutlined />
                  </div>
                </div>
              </div>

              <div class="btn">
                <button @click="addCart">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FullscreenOutlined } from "@ant-design/icons-vue";
import {
  LeftOutlined,
  RightOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons-vue";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
// import { computed } from "vue";
export default {
  name: "FeaturedProduct",
  components: {
    FullscreenOutlined,
    LeftOutlined,
    RightOutlined,
    PlusOutlined,
    MinusOutlined,
  },
  setup() {
    const store = useStore();
    const states = store.state;
    const products = store.state.featuredProducts;
    const featuredProducts = ref(store.getters.featuredProductsText);

    const currentSlideFured = ref(0);
    const getSlideCountFured = ref(null);
    const autoPlaySlideFured = ref(true);
    const timeoutDurationFured = ref(5000);

    //next Slide
    const nextSlideFured = () => {
      if (currentSlideFured.value === getSlideCountFured.value) {
        currentSlideFured.value = 1;
        return;
      }
      currentSlideFured.value += 1;
    };

    //prev Slide
    const prevSlideFured = () => {
      if (currentSlideFured.value === 1) {
        currentSlideFured.value = 1;
        return;
      }
      currentSlideFured.value -= 1;
    };

    const goToSlideFured = (index) => {
      currentSlideFured.value = index + 1;
    };

    //autoPlay

    const autoPlay = () => {
      setInterval(() => {
        nextSlideFured();
      }, timeoutDurationFured.value);
    };

    if (autoPlaySlideFured.value) {
      autoPlay();
    }

    onMounted(() => {
      getSlideCountFured.value =
        document.querySelectorAll(".slide-featured").length;
    });
    // phan loai mau
    const statePro = store.state;
    const menSlimColors = store.state.menSlim.map((item) => item.color);
    const uniqueColors = [...new Set(menSlimColors)];

    //phan loai size

    const menSlimSize = store.state.menSlim.map((item) => item.size);
    const uniqueSizes = [...new Set(menSlimSize)];
    const sizeActi = ref(uniqueSizes[0]);
    const colorActi = ref(uniqueColors[0]);

    const activateBox = (index) => {
      store.commit("activateBox", index);
      sizeActi.value = uniqueSizes[index];
    };
    // active ColorMen
    const activeBoxColor = (index) => {
      store.commit("activeColoMenSlim", index);
      colorActi.value = uniqueColors[index];
    };

    //tao boxes
    store.commit("initBoxes", uniqueSizes.length);
    // tao box color
    store.commit("initBoxesColor", uniqueColors.length);
    // tim gia
    const getPriceForActiveSizeAndColor = () => {
      const activeProduct = store.state.menSlim.find(
        (item) => item.size === sizeActi.value && item.color === colorActi.value
      );
      if (activeProduct) {
        return activeProduct.priceSale;
      }
      return activeProduct.priceSale[0];
    };

    const getCost = () => {
      const activeProduct = store.state.menSlim.find(
        (item) => item.size === sizeActi.value && item.color === colorActi.value
      );

      if (activeProduct) {
        return activeProduct.cost;
      }
      return null;
    };
    const getColor = () => {
      return colorActi.value;
    };
    const getSize = () => {
      return sizeActi.value;
    };
    getPriceForActiveSizeAndColor();
    getCost();
    // tang giam san pham
    const quatityProduct = ref(store.state.coutProduct);

    const reduceProduct = () => {
      store.commit("reduce");
    };
    const incrementProduct = () => {
      store.commit("increment");
    };
    // add san pham vao localStorage
    const addCart = () => {
      const activeProduct = store.state.menSlim.find(
        (item) => item.size === sizeActi.value && item.color === colorActi.value
      );
      const productCart = Object.assign({}, activeProduct, {
        quatityCart: states.coutProduct,
      });
      localStorage.setItem(activeProduct.id, JSON.stringify(productCart));
    };
    return {
      states,
      currentSlideFured,
      featuredProducts,
      products,
      prevSlideFured,
      goToSlideFured,
      getSlideCountFured,
      nextSlideFured,
      uniqueColors,
      uniqueSizes,
      activateBox,
      activeBoxColor,
      statePro,
      getPriceForActiveSizeAndColor,
      getCost,
      getColor,
      getSize,
      addCart,
      quatityProduct,
      reduceProduct,
      incrementProduct,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 80px auto;
}
.featured-text {
  margin-bottom: 40px;
}
.featured-products-container {
  display: flex;
  padding: 12px 0;
}
.featured-products {
  display: flex;
}
.featured-products-all {
  width: 60%;
}
.products-template {
  border: 4px solid #d5d8d9;
  height: auto;
  width: 120px;
  opacity: 0.5;
  display: block;
  margin-bottom: 10px;
}
.products-template img {
  height: 120px;
  width: 120px;
  object-fit: cover;
}
.product-zoom {
  position: relative;
  width: 100%;
  padding: 0 12px;
}
.product-zoom .img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
.product-content {
  padding-left: 50px;
}
.badges {
  background: #000;
  font-weight: 700;
  color: white;
  padding: 5px 10px;
  line-height: 1.25rem;
  top: 0;
  position: absolute;
}
.icon-zoom {
  right: 40px;
  top: 30px;
  border-radius: 50%;
  position: absolute;
  background: white;
  max-width: 56px;
  font-size: 32px;
  cursor: zoom-in;
}
.active {
  border: 4px solid #3a837e;
  opacity: 1;
}
.navigation {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigation:hover {
  cursor: pointer;
}
.toggle-page {
  display: flex;
  flex: 1;
  position: absolute;
  top: -50%;
}
.left {
  position: absolute;
  left: 20px;
  border-radius: 50%;
  padding: 10px;
  background: white;
}
.right {
  position: absolute;
  right: 50px;
  border-radius: 50%;
  padding: 10px;
  background: white;
}
.color-all,
.size-all {
  display: flex;
  margin: 5px 0 20px 0;
}
.color {
  border-radius: 50%;
  width: 29px;
  height: 29px;
  margin: 10px 10px 0 0;
}
.sizes {
  width: 51px;
  height: 51px;
  background: #fff;
  margin: 10px 10px 0 0;
  border: 1px solid #ccc;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.activeSize {
  background-color: #000;
  color: #fff;
}
.size-all .sout-out {
  background: #3a837e;
  font-style: italic;
}
.color.active-color {
  border: 3px solid #3a837e;
}
.title-product {
  font-size: 32px;
  line-height: 2.5rem;
  font-weight: 500;
  padding-bottom: 5px;
  padding-top: 10px;
  letter-spacing: -1px;
  margin-bottom: 16px;
}
.tock-quality {
  font-size: 18px;
}
.price-sale {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.sale-price {
  font-weight: 700;
  font-size: 36px;
}
.cost {
  font-size: 24px;
  padding-left: 10px;
  text-decoration: line-through;
}
.getColor,
.getSize {
  display: flex;
  line-height: 1.933;
}
.title {
  padding-left: 5px;
  font-weight: 600;
}
.quality-main {
  display: flex;
  align-items: center;
}
.input {
  width: 45px;
  height: 45px;
  border: 1px solid;
  margin: 10px 10px;
  padding: 0 18px;
}
.quality-text {
  padding-bottom: 10px;
}
.btn button {
  border: none;
  font-weight: 500;
  font-size: 20px;
  margin: 30px 0 20px;
  padding: 20px 10px;
  background: #3a837e;
  color: white;
  width: 100%;
  border-radius: 10px;
}
.btn:hover button,
.options:hover {
  cursor: pointer;
}
</style>
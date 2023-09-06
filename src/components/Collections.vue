<template>
  <div class="collections">
    <div class="intro-collection">
      <div class="titlet">
        <h2 class="text">Why Choose Effortless</h2>
        <div class="tittle-colum">
          <div class="title-all">
            <div class="title-list" v-for="icon in icons" :key="icon">
              <component class="icon" :is="icon.icon" />
              <h3>{{ icon.title }}</h3>
              <p>{{ icon.text1 }}</p>
              <p>{{ icon.text2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="collections-products">
      <h4 class="text-collections">Collections</h4>

      <div class="products">
        <div class="product-all">
          <div
            class="product-list"
            v-for="product in collectionProducts"
            :key="product"
          >
            <img class="img-product" :src="product.img" alt="" />
            <h4 class="text-product">{{ product.text }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import {
  TrophyOutlined,
  GlobalOutlined,
  HourglassOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "CollectionsProduct",
  components: { TrophyOutlined, HourglassOutlined, GlobalOutlined },
  setup() {
    const store = useStore();
    const collectionTexts = store.state.collectionTexts;
    const icons = computed(() => store.getters.getIcons);
    const collectionProducts = store.state.collectionProducts;
    return {
      icons,
      collectionTexts,
      collectionProducts,
    };
  },
};
</script>

<style scoped>
.collections {
  max-width: 1200px;
  padding-top: 80px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.collections-products {
  padding: 80px 0;
}
.title-all {
  display: flex;
  justify-content: space-around;
}
.text {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
  margin-bottom: 24px;
}
.icon {
  font-size: 35px;
  color: #3a837e;
}
.title-list h3 {
  margin: 15px 0;
  font-size: 19px;
  font-weight: 600;
}
.title-list p {
  font-weight: 400;
  line-height: 1.5;
}
.product-all {
  display: flex;
  flex-wrap: wrap;
}
.text-collections {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 50px;
}
.product-list {
  width: 48%;
  box-sizing: border-box;
  margin: 5px;
  position: relative;
  text-align: center;
}
.img-product {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 350px;
}
.product-list h4 {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  width: 100%;
  color: white;
  line-height: 1.25;
  padding: 8px;
}
.product-list:hover h4 {
  cursor: pointer;
  height: 100%;
  background-color: rgba(58, 131, 126, 0.6);
  line-height: 342px;
}
</style>
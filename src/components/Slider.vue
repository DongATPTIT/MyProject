<template>
  <div class="slider">
    <div class="slider-all">
      <CarouselSli v-slot="{ currentSlide }">
        <div
          class="slide-info"
          v-for="(slide, index) in carouselSlides"
          :key="index"
        >
          <div class="slide">
            <transition name="slide">
              <div v-show="currentSlide === index + 1">
                <img
                  class="img"
                  :src="require(`../assets/Slider/${slide}.jpg`)"
                  alt=""
                />
              </div>
            </transition>
          </div>
        </div>
      </CarouselSli>

      <div class="slider-content">
        <div class="text-content">
          <h1>
            An Effortless
            <br />
            Shopping Experience
          </h1>
        </div>

        <div class="banner-text">
          <p>Start Selling More Online</p>
        </div>

        <div class="banner-btn">
          <button class="btn">Shop Now</button>
        </div>
      </div>
    </div>

    <div v-if="showMenuList" class="menu-all">
      <MenuList />
    </div>
  </div>
</template>

<script>
import { useStore, mapState } from "vuex";
import { ref } from "vue";
// import { computed } from "vue";
import MenuList from "../common/Menu_List.vue";
import CarouselSli from "../common/Carousel.vue";
export default {
  name: "SliderWeb",
  components: { MenuList, CarouselSli },
  setup() {
    const store = useStore();
    // const carouselSlides = computed(() => store.state.carouselSlides);
    const carouselSlides = ref(store.state.carouselSlides);

    return {
      carouselSlides,
    };
  },
  computed: {
    ...mapState(["slider"]),
    showMenuList() {
      const store = useStore();
      return store.state.checked.showMenuList;
    },
  },
};
</script>

<style scoped>
.slider {
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  position: relative;
  z-index: 0;
}
.slider-content {
  position: absolute;
  top: 70px;
  left: 55px;
}
.img {
  background-size: cover;
  width: 100%;
}
.btn {
  border: none;
  outline: none;
  background-color: #3a837e;
  padding: 20px 60px;
  border-radius: 10px;
  margin: 0;
  height: auto;
  color: white;
  font-weight: 700;
  font-size: 16px;
}
.menu-all {
  position: absolute;
  width: 58%;
  left: 0;
  top: 0;
}
.text-content {
  font-size: 40px;
}
.banner-text {
  font-size: 20px;
}
.text-content,
.banner-text {
  padding-bottom: 30px;
}
.slider-all {
}
</style>
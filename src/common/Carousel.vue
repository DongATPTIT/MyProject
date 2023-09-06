<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />
  </div>
  <!-- Pagination -->
  <div class="pagination">
    <span
      @click="goToSlide(index)"
      v-for="(slide, index) in getSlideCount"
      :key="index"
      :class="{ active: index + 1 === currentSlide }"
    >
    </span>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "CarouselSli",
  setup() {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlaySlide = ref(true);
    const timeoutDuration = ref(5000);

    //next Slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    //prev Slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    //autoPlay

    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    if (autoPlaySlide.value) {
      autoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });
    return {
      currentSlide,
      getSlideCount,
      goToSlide,
      nextSlide,
      prevSlide,
    };
  },
};
</script>

<style scoped >
.pagination {
  display: flex;
  position: absolute;
  bottom: 24px;
  width: 100%;
  gap: 16px;
  justify-content: center;
  align-items: center;
}
.pagination span {
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.pagination span:hover {
  cursor: pointer;
}
.pagination .active {
  background-color: #6347c7;
}
</style>
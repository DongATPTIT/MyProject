<template>
  <div class="footer">
    <div class="container">
      <div class="content">
        <img :src="img" alt="" />
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
</style>
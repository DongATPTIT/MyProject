<template>
  <headerView />
  <NavbarWeb />
  <SliderWeb />
  <BodyWeb />
</template>

<script>
import BodyWeb from "../components/BodyWeb.vue";
import headerView from "../components/Header.vue";
import NavbarWeb from "../components/Navbar.vue";
import SliderWeb from "../components/Slider.vue";
export default {
  name: "HomeProject",
  components: { headerView, NavbarWeb, SliderWeb, BodyWeb },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

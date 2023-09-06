<template>
  <div class="header">
    <div class="slot"></div>
    <div class="title">
      <div class="icon-arrow">
        <i class="left-arrow">
          <LeftOutlined />
        </i>
      </div>

      <div class="title">
        <p class="slide_title">An Effortless Shopping Experience</p>
      </div>

      <div class="icon-arrow">
        <i class="right-arrow">
          <RightOutlined />
        </i>
      </div>
    </div>

    <div class="select">
      <selecFlag />
      <CountrySelect />
    </div>
  </div>
</template>

<script>
import { LeftOutlined } from "@ant-design/icons-vue";
import { RightOutlined } from "@ant-design/icons-vue";
import { mapState } from "vuex";
import selecFlag from "./Select_Flag.vue";
import CountrySelect from "./Select_Country.vue";
export default {
  name: "headerView",
  components: { LeftOutlined, RightOutlined, selecFlag, CountrySelect },
  computed: {
    ...mapState(["imgSlideHeader"]),
  },
};
</script>

<style scoped>
.header {
  height: 48px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 33.333333%; */
}
.select {
  display: flex;
}

.title {
  display: flex;
  text-align: center;
  justify-content: space-around;
}

.slide_title {
  color: white;
}
.icon-arrow {
  color: #fff;
}
.slot,
.title,
.select {
  min-width: 33.3333333%;
}
</style>

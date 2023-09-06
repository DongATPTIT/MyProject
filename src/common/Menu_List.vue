<template>
  <div class="menu-all">
    <div class="menu-list">
      <ul class="menu-ul">
        <p class="menu-content">Menu</p>
        <li class="menu"><span class="menu-text">Home</span></li>
        <li class="menu-cate">
          <div class="menu-text" @click="toggleDrawerMenu">
            <span class="menu">Catelogue </span>
            <i class="drop-down"><DownOutlined /> </i>
          </div>

          <div class="menu-drawer" v-if="ShowDrawer">
            <ul class="drawer-menu-ul">
              <li class="drawer-li">Best Sellers</li>
              <li class="drawer-li">Men's Fashion</li>
              <li class="drawer-li">Men's Swimwear</li>
              <li class="drawer-li">Men's Innerwear</li>
              <li class="drawer-li">Men's Accessories</li>
            </ul>
          </div>
        </li>
        <li class="menu"><span class="menu-text">About</span></li>
        <li class="menu"><span class="menu-text">News</span></li>
        <li class="menu"><span class="menu-text">FAQ</span></li>
        <li class="menu"><span class="menu-text">Contact</span></li>
      </ul>
    </div>

    <ShopMenu />
  </div>
</template>

<script>
import { DownOutlined } from "@ant-design/icons-vue";
import ShopMenu from "./Shop_Menu.vue";
import { useStore } from "vuex";
export default {
  name: "MenuList",
  components: {
    ShopMenu,
    DownOutlined,
  },
  setup() {
    const store = useStore();
    const toggleDrawerMenu = () => {
      store.commit("toggleDrawerMenu");
    };
    const test = store.state.bestSellers.map((color) => color.color);
    console.log(test);
    return {
      toggleDrawerMenu,
    };
  },
  computed: {
    ShowDrawer() {
      const store = useStore();
      return store.state.checked.showDrawerMenu;
    },
  },
};
</script>

<style scoped>
.menu-all {
  background-color: white;
  z-index: 0;
  overflow: auto;
}
.menu-list:hover {
  cursor: pointer;
}
.menu-content {
  font-weight: 700;
  font-size: 19px;
  padding: 40px 24px 8px 24px;
  position: relative;
}
.menu-content::after {
  content: "";
  position: absolute;
  background-color: black;
  height: 1.5px;
  width: 70%;
  right: 11%;
  bottom: 22%;
}
.menu-ul .menu {
  list-style: none;
  padding: 11px 48px;
  font-size: 17px;
}
.menu-text {
  display: flex;
  align-items: center;
}
.menu-text:hover {
  color: #579591;
  cursor: pointer;
}
.drop-down {
  position: absolute;
  right: 60px;
}
.drawer-menu-ul li {
  list-style: none;
  text-decoration: none;
}
.drawer-li {
  padding: 11px 64px 16px;
  line-height: 1.3;
}
.drawer-li:hover {
  color: #579591;
  cursor: pointer;
}
</style>
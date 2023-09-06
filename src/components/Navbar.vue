<template>
  <div class="navbar">
    <div class="menu-all">
      <div class="menu" @click="toggleMenu">
        <i class="btn icon-menu" v-if="checkShowMenuIcon"><MenuOutlined /></i>
        <i class="btn icon-close" v-else><CloseOutlined /></i>
        <p class="content-menu">MENU</p>
      </div>
    </div>
    <div>
      <img :src="img" alt="" />
    </div>

    <div class="btn">
      <i class="btn btn-search"><SearchOutlined /></i>
      <i class="btn btn-user"><UserOutlined /></i>
      <i class="btn btn-cart">
        <div @click="showCartShopping">
          <ShoppingOutlined />
          <p class="quatity-cart">{{ dialog.length }}</p>
        </div>
        <div v-if="checkShowCart()">
          <ShoppingCart :dialog="dialog" />
        </div>
      </i>
    </div>
  </div>
</template>

<script>
import {
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
  ShoppingOutlined,
  CloseOutlined,
} from "@ant-design/icons-vue";
import { useStore } from "vuex";
import ShoppingCart from "../common/ShoppingCart.vue";

export default {
  name: "NavbarWeb",
  components: {
    MenuOutlined,
    SearchOutlined,
    UserOutlined,
    ShoppingOutlined,
    CloseOutlined,
    ShoppingCart,
  },
  setup() {
    const store = useStore();
    const toggleMenu = () => {
      store.commit("toggleMenuList");
    };
    const localStorageKeys = Array.from(
      { length: localStorage.length },
      (_, index) => localStorage.key(index)
    );
    const getProduct = store.state.menSlim.map((item) => item);
    const dialog = localStorageKeys.map((key) => {
      const quatity = JSON.parse(localStorage.getItem(key));
      return quatity;
    });
    // console.log(dialog);

    return {
      toggleMenu,
      dialog,
      getProduct,
    };
  },
  methods: {
    show() {
      this.$store.commit("toggleMenuList");
    },
    showCartShopping() {
      this.$store.commit("toggleShowCart");
    },
    checkShowMenuIcon() {
      const store = useStore();
      return store.state.checked.iconMenu;
    },
    checkShowCart() {
      const store = useStore();
      return store.state.checked.showCart;
    },
  },
  computed: {
    img() {
      const store = useStore();
      return store.state.navbar.img;
    },
    showMenuList() {
      const store = useStore();
      return store.state.checked.showMenuList;
    },
  },
};
</script>


<style scopted>
.navbar {
  margin: 16px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menu {
  display: flex;
  align-items: center;
}
.icon-menu {
  font-size: 24px;
  color: #000;
}
.btn {
  font-size: 16px;
  margin: 0 6px;
  display: flex;
}

.btn {
  font-size: 24px;
  margin: 0 10px;
}
.navbar:hover {
  cursor: pointer;
}
.icon-close {
  display: none;
}
.quatity-cart {
  font-size: 10px;
  width: 15px;
  height: 15px;
  color: white;
  background: #3a837e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 92px;
  position: absolute;
  top: 63px;
}
</style>
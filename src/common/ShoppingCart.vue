<template>
  <div class="cart-hidden" @click="closeCart()"></div>
  <div class="cart-layout">
    <div class="cart-container">
      <div class="cart-drawer">
        <div class="cart-drawer-header">
          <div class="cart-drawer-title">
            <p>Your Cart:</p>
            <span>{{ dialog.length }} Items</span>
          </div>
          <div class="cart-drawer-close" @click="closeCart()">
            <i class="icon"> <CloseOutlined /></i>
          </div>
        </div>

        <div class="cart-product">
          <div class="products">
            <div class="productss" v-for="product in dialog" :key="product">
              <div class="img-product">
                <img :src="product.img" alt="" />
              </div>
              <div class="details-product">
                <div class="content-product">
                  <div class="title-product">
                    <p class="content">{{ product.content }}</p>
                  </div>

                  <div class="color-product">
                    <p class="text-color">Color:</p>
                    <p class="select-color">{{ product.color }}</p>
                  </div>

                  <div class="size-product">
                    <p class="text-size">Size:</p>
                    <p class="select-size">{{ product.size }}</p>
                  </div>
                  <div>
                    <p class="price-products">{{ product.priceSale }}</p>
                  </div>
                  <div class="product-quatity">
                    <MinusOutlined class="boder" @click="reduceProducts()" />
                    <input
                      type="number"
                      class="boder input-quatity"
                      v-model="product.quatityCart"
                    />
                    <PlusOutlined class="boder" @click="incrementProducts()" />
                  </div>
                </div>
                <div class="delete-product">
                  <DeleteOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-wrap">
          <div class="cart-in">
            <input type="text" placeholder="Enter order note (Optional)" />
          </div>

          <div class="price-product">
            <p class="title-price">Subtotal</p>
            <p class="price">€{{ totalPrice }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CloseOutlined,
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
import { useStore } from "vuex";
export default {
  name: "ShoppingCart",
  components: {
    CloseOutlined,
    PlusOutlined,
    MinusOutlined,
    DeleteOutlined,
  },
  props: {
    dialog: Object,
  },
  setup(props) {
    const store = useStore();
    const dialogValues = Object.values(props.dialog);
    console.log(dialogValues);
    const quatityCart = dialogValues.map((item) => {
      return item.quatityCart;
    });
    console.log(quatityCart);
    const totalPrice = dialogValues.reduce((total, product) => {
      if (product.priceSale && product.quatityCart) {
        const price = parseFloat(
          product.priceSale.replace("€", "").replace(",", ".")
        );
        return total + price * product.quatityCart;
      }
      return total;
    }, 0);
    console.log(totalPrice);
    const closeCart = () => {
      store.commit("toggleShowCart");
    };
    //tang giam san pham
    const reduceProducts = () => {
      store.commit("reduce");
    };
    const incrementProducts = () => {
      store.commit("increment");
    };
    return {
      closeCart,
      dialogValues,
      totalPrice,
      incrementProducts,
      reduceProducts,
    };
  },
};
</script>

<style coped>
.cart-hidden {
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 1;
}
.cart-layout {
  top: 0;
  position: absolute;
  right: 0;
  background: white;
  width: 40%;
  z-index: 10000;
}
.cart-drawer {
  padding: 0 24px 24px 24px;
}
.cart-product {
  border-bottom: 1px solid #ccc;
}
.product {
  padding-top: 0.3rem;
  border-bottom: 1px solid #eaeaea;
  padding: 20px;
}
.cart-drawer-title,
.details-product,
.color-product,
.size-product,
.productss {
  display: flex;
}
.color-product,
.size-product {
  align-items: center;
}
.cart-drawer-header {
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
}
.details-product {
  position: relative;
  width: 100%;
  padding: 0 20px;
}
.delete-product {
  position: absolute;
  right: 0;
}
.select-color,
.select-size {
  font-size: 15px;
  line-height: 1.4;
  font-weight: 700;
}
.text-color,
.text-size {
  margin-right: 10px;
  font-size: 15px;
}
.content {
  font-size: 20px;
  padding-bottom: 5px;
}
.delete-product {
  color: #db5858;
}
.img-product img {
  height: 132px;
  width: 132px;
  object-fit: cover;
}
.product-quatity {
  padding: 10px 0;
}
.boder {
  padding: 10px;
}
.input-quatity {
  width: 45px;
  height: 45px;
  border: 1px solid;
  margin: 10px 10px;
  padding: 0 18px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
.cart-in input {
  padding: 10px;
  width: 100%;
  margin: 20px 0;
  padding: 10px;
}
.price-product {
  justify-content: space-between;
  display: flex;
}
</style>
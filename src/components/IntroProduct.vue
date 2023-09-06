<template>
  <div class="intro-product">
    <div class="container">
      <div class="shopnow">
        <div class="shopnow-content">
          <div>
            <h1>Built for comfort</h1>
            <p>
              Bringing you the best of ethically sourced fashion from the best
              designers
            </p>
            <button>Shop Now</button>
          </div>
        </div>
        <div class="img">
          <img src="@/assets/BodyVue/IntroProducts/img1.jpg" alt="" />
        </div>
      </div>
    </div>

    <div class="learnmore">
      <div class="img">
        <img src="@/assets/BodyVue/IntroProducts/img2.jpg" alt="" />
      </div>
      <div class="learnmore-content">
        <div>
          <h1>Better for the planet</h1>
          <p>
            Committed to sustainability from the ground up. From recycled
            packaging and fibers.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroProduct",
};
</script>

<style scoped>
.intro-product {
  padding: 80px 0;
}
.learnmore,
.shopnow {
  align-items: center;
  width: 100%;
  display: flex;
  color: #fff;
  background: #000;
  opacity: 0.8;
}
.learnmore-content,
.shopnow-content,
.img {
  width: 50%;
}
.learnmore-content,
.shopnow-content {
  padding: 5rem;
}
h1 {
  font-size: 40px;
  margin-bottom: 18px;
  font-weight: 800;
}
p {
  line-height: 1.625rem;
  opacity: 0.8;
  font-size: 16px;
  padding-bottom: 20px;
}
.img img {
  width: 100%;
}
button {
  background: #3a837e;
  text-decoration: none;
  border: 0;
  border-radius: 8px;
  padding: 10px 30px;
  height: 47px;
  color: #fff;
  font-weight: 700;
}
</style>>
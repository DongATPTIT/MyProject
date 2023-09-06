<template>
  <div class="journal">
    <div class="container">
      <h1>Our Journal</h1>
      <div class="magazines">
        <div class="magazine" v-for="magazine in magazines" :key="magazine">
          <div class="img-magazine">
            <img :src="magazine.img" alt="" />
          </div>
          <div class="content-magazine">
            <h1>{{ magazine.content }}</h1>
            <p class="date-magazine">{{ magazine.date }}</p>
            <p class="title-magazine">{{ magazine.title }}</p>
            <p class="text-magazine">{{ magazine.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "JournalVue",
  setup() {
    const store = useStore();
    const magazines = store.state.journal;

    return { magazines };
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 40px;
}
.container > h1 {
  padding-bottom: 30px;
}
.magazines {
  display: flex;
}
.content-magazine > h1 {
  font-size: 25px;
}
.content-magazine p {
  padding-top: 16px;
}
.magazine {
  width: 32.33333%;
  box-shadow: 0.877px 1.798px 34.58px 3.42px #00000047;
}
.img-magazine > img {
  width: 100%;
}
.magazine:nth-child(2) {
  margin: 0 15px;
}
.content-magazine {
  padding: 24px;
}
.date-magazine,
.text-magazine {
  font-size: 16px;
}
.title-magazine {
  font-size: 19px;
}
</style>>

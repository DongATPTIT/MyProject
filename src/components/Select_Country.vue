<template>
  <div>
    <!-- <selectFlag :selectedValue="selectedLanguage" :options="languages" /> -->
    <p>?</p>
  </div>
</template>

<script>
// import selectFlag from "./Select_Flag.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "CountrySelect",
  components: {},
  setup() {
    const store = useStore();

    const selectedLanguage = computed(() => store.state.selectedLanguage);
    const languages = computed(() => store.state.language);

    const selectedNation = computed(() => store.state.selectedNation);
    const nations = computed(() => store.state.nations);

    return {
      selectedLanguage,
      languages,
      selectedNation,
      nations,
    };
  },
};
</script>

<style>
</style>
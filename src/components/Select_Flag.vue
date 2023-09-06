<template>
  <div class="select">
    <div class="selected-option" @click="toggleDropdown">
      <img
        class="flag"
        :src="selectedNation ? selectedNation.flag : firstNation.flag"
        alt="Flag"
      />
      {{ selectedNation ? selectedNation.name : firstNation.name }}
      <DownOutlined />
    </div>
    <div v-if="isDropdownOpen" class="dropdown">
      <div
        v-for="nation in nations"
        :key="nation.name"
        class="dropdown-item"
        @click="selectNation(nation)"
      >
        <img class="flag" :src="nation.flag" alt="" />
        <p class="name">{{ nation.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { DownOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";

export default {
  name: "selectFlag",
  components: { DownOutlined },
  data() {
    const store = useStore();
    return {
      selectedNation: computed(() => store.state.selectedNation),
      nations: computed(() => store.state.nations),
      isDropdownOpen: ref(false),
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectNation(nation) {
      this.$store.commit("setSelectedNation", nation);
      this.isDropdownOpen = false;
    },
  },
  computed: {
    firstNation() {
      return this.nations[0];
    },
  },
};
</script>

<style scoped>
.select {
  position: relative;
  color: aliceblue;
}

.selected-option {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
  z-index: 1;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
.flag {
  width: 16px;
  height: 16px;
}
.name {
  color: black;
}
</style>

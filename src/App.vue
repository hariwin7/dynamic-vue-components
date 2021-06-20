<template>
  <DynamicRenderer
    :typeSchema="typeSchema"
    :data="data"
    @input="updateData($event)"
  />
</template>

<script>
import DynamicRenderer from "./components/DynamicRenderer.vue";
import { typeSchema } from "./constants/schema";

export default {
  name: "App",
  components: {
    DynamicRenderer,
  },
  emits: ["input"],
  data() {
    return {
      typeSchema: typeSchema,
      data: {},
    };
  },
  methods: {
    updateData({ state, value }) {
      this.data[state] = value;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #f5f7f9;
  height: 100%;
}
</style>

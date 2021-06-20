<template>
  <div class="root">
    <div v-for="(schema, index) in typeSchema" :key="index">
      <component
        :key="index"
        :is="schema.type"
        :value="data[schema.state]"
        @input="updateData(schema.state, $event)"
        v-bind="schema"
        :data="data"
      >
      </component>
    </div>
  </div>
</template>

<script>
import Input from "./Input.vue";
import SelectList from "./SelectList.vue";
import TextDisplay from "./TextDisplay.vue";
export default {
  name: "DynamicRenderer",
  emits: ["input"],
  props: {
    typeSchema: {
      type: Array,
    },
    data: {
      type: Object,
    },
  },
  components: {
    Input,
    SelectList,
    TextDisplay,
  },
  methods: {
    updateData(state, event) {
      this.$emit("input", { state, value: event.target.value });
    },
  },
};
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}
</style>

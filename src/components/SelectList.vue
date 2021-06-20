<template>
  <div class="container">
    <label>{{ label }}</label>
    <select :value="value" @change="$emit('input', $event)">
      <option :value="option" v-for="(option, index) in options" :key="index">{{
        option
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectList",
  props: ["label", "value", "options"],
  emits: ["input"],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 20rem;
}
.container label {
  font-weight: 800;
}
.container select {
  height: 45px;
  padding: 10px;
  background: #f5f7f9;
  border-radius: 10px;
}
</style>

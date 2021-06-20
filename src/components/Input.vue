<template>
  <div class="container">
    <label>{{ label }}</label>
    <input :value="value" @input="$emit('input', $event)" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["label", "value"],
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
.container input {
  height: 20px;
  padding: 10px;
  background: #f5f7f9;
  border-radius: 10px;
}
</style>

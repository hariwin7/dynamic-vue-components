<template>
  <div>
    <label
      ><span>{{ label }}:</span>{{ value }}</label
    >
  </div>
</template>

<script>
export default {
  name: "TextDisplay",
  props: ["label", "value"],
};
</script>

<style scoped>
div {
  width: 20rem;
}
label {
  font-size: 30px;
  color: #007840;
}
label >>> span {
  font-size: 20px;
  font-weight: 800;
  color: black;
}
</style>

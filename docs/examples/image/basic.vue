<template>
  <KlImage :src="src" />
</template>
<!-- src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" -->

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const src = ref("");
onMounted(() => {
  setTimeout(() => {
    src.value =
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
  }, 1000);
});
</script>

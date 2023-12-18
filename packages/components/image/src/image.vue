<template>
  <div class="kl-image">
    <img :src="imageSrc" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const imageSrc = ref<string | undefined>();
const loadImage = () => {
  imageSrc.value =
    "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
};
onMounted(() => {
  loadImage();
});
</script>

<template>
  <div class="kl-image">
    <slot v-if="hasLoadError">
      <div class="kl-image_error">图片加载失败...</div>
    </slot>
    <template v-else>
      <img
        :src="imageSrc"
        v-if="imageSrc"
        @click="handleClick"
        class="kl-image_img"
        @error="handleError"
        @load="handleLoad"
      />
      <div v-if="isLoading" class="kl-iamge_loading is-animated">
        <div class="kl-iamge_placeholder">加载中...</div>
      </div>
    </template>
    <imageViewer v-if="showViewer" />
  </div>
</template>
<script setup lang="ts">
import { imageProps } from "./image";
import { useImage } from "./useImage";
import imageViewer from "./image-viewer.vue";
defineOptions({
  name: "KLImage",
});
const props = defineProps(imageProps);
const {
  imageSrc,
  showViewer,
  hasLoadError,
  isLoading,
  handleError,
  handleClick,
  handleLoad,
} = useImage(props);
</script>
<style scoped lang="scss">
.kl-image {
  width: 300px;
  height: 200px;
}
.kl-image_img {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
}
.kl-image_error,
.kl-iamge_loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: #fff;
  color: #a8abb2;
  vertical-align: middle;
  overflow: hidden;
  position: relative;
}
@keyframes kl-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.is-animated {
  background: linear-gradient(90deg, #f0f2f5 25%, #e6e8eb 37%, #f0f2f5 63%);
  background-size: 400% 100%;
  animation: kl-skeleton-loading 1.4s ease infinite;
}
</style>

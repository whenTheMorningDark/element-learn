<template>
  <Teleport to="body">
    <Transition name="viewer-fade" appear>
      <div class="kl-image-viewer__wrapper">
        <div class="kl-image-viewer__mask" @click.self="hide" />
        <div class="kl-image-viewer__canvas" @click="handleClick">
          <img
            src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
            style="transform: scale(1) rotate(0deg) translate(0px, 0px)"
          />
          <template v-if="isSingle">
            <span
              class="iconfont icon-youjiantou kl-image-viewer_icon_btn kl-image-viewer_icon kl-image-viewer_next"
            />
            <span
              class="iconfont icon-zuojiantou kl-image-viewer_icon_btn kl-image-viewer_icon kl-image-viewer_prev"
            />
          </template>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { imageViewerEmits, imageViewerProps } from "./image-viewer";
const emit = defineEmits(imageViewerEmits);
const props = defineProps(imageViewerProps);

const isSingle = computed(() => {
  const { urlList } = props;
  return urlList.length > 1;
});

const handleClick = () => {
  console.log("ddd");
};
const hide = () => {
  emit("close");
};
</script>
<style scoped lang="scss">
.kl-image-viewer__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2002;
  .kl-image-viewer__mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    background: #000;
  }
  .kl-image-viewer__canvas {
    position: static;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
  .kl-image-viewer_icon_btn {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0.8;
    cursor: pointer;
    box-sizing: border-box;
    user-select: none;
  }
  .kl-image-viewer_icon {
    width: 44px;
    height: 44px;
    font-size: 24px;
    color: #fff;
    background-color: #606266;
    border-color: #fff;
  }
  .kl-image-viewer_next {
    top: 50%;
    transform: translateY(-50%);
    right: 40px;
    text-indent: 2px;
  }
  .kl-image-viewer_prev {
    top: 50%;
    transform: translateY(-50%);
    left: 40px;
  }
}
.viewer-fade-enter-active {
  animation: viewer-fade-in 0.3s;
}

.viewer-fade-leave-active {
  animation: viewer-fade-out 0.3s;
}

@keyframes viewer-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes viewer-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>

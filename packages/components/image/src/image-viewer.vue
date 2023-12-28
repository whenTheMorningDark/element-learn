<template>
  <Teleport to="body">
    <div class="kl-image-viewer__wrapper">
      <div class="kl-image-viewer__mask" />
      <div class="kl-image-viewer__canvas" @click="handleClick">
        <img
          src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        />
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
const handleClick = () => {
  console.log("ddd");
};
</script>
<style scoped lang="scss">
.kl-image-viewer__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
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
}
</style>

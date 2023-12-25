import { ref, onMounted, watch } from "vue";
import type { imageProps } from "./image";
const useImage = (props: imageProps) => {
  const imageSrc = ref<string | undefined>();
  const hasLoadError = ref(false);
  const isLoading = ref(true);
  const handleClick = () => {
    console.log("处理点击情况");
  };

  const loadImage = () => {
    isLoading.value = true;
    hasLoadError.value = false;
    imageSrc.value = props.src;
  };
  const handleError = () => {
    isLoading.value = false;
    hasLoadError.value = true;
  };
  const handleLoad = () => {
    isLoading.value = false;
    hasLoadError.value = false;
  };
  watch(
    () => props.src,
    () => {
      loadImage();
    }
  );
  onMounted(() => {
    loadImage();
  });
  return {
    imageSrc,
    hasLoadError,
    loadImage,
    isLoading,
    handleClick,
    handleError,
    handleLoad,
  };
};

export { useImage };

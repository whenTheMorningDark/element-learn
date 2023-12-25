import type { ExtractPropTypes } from "vue";
export const imageProps = {
  src: {
    type: String,
    default: "",
  },
  fit: {
    type: String,
    default: "cover",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: "",
  },
  height: {
    type: [String, Number],
    default: "",
  },
  radius: {
    type: [String, Number],
    default: "",
  },
  round: {
    type: Boolean,
    default: false,
  },
};
export type imageProps = ExtractPropTypes<typeof imageProps>;

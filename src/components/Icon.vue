<template>
  <component
    :is="iconGlyph"
    :class="className"
    :strokeWidth="strokeWidth"
  ></component>
</template>

<script>
import icons from "../icons/index";

export default {
  props: {
    glyph: String,
    className: {
      type: String,
      default: "ml-1 inline h-5 w-5",
    },
    strokeWidth: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      iconGlyph: icons[this.glyph],
    };
  },
};
</script>

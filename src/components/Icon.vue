<template>
  <span
    v-html="iconComponent(strokeWidth)"
    class="icon-svg"
    :class="className"
  ></span>
</template>

<script>
import icons from "@/icons/index";

export default {
  props: {
    glyph: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: "ml-1 inline h-5 w-5",
    },
    strokeWidth: {
      type: [Number, String],
      default: 2,
    },
  },
  data() {
    return {
      iconComponent: icons[this.glyph],
    };
  },
};
</script>

<template>
  <span
    v-html="iconComponent(strokeWidth)"
    class="icon-svg"
    :class="className"
    :strokeWidth="strokeWidth"
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
    const glyphName = this.glyph.toLowerCase();
    return {
      iconComponent: icons[glyphName] ? icons[glyphName] : icons['code'],
    };
  },
};
</script>

<template>
  <span
    v-html="iconGlyph.template"
    class="icon-svg"
    :class="className"
  ></span>
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
  methods: {
    debug() {
      // console.log('icons', icons);
      // console.log('glyph', this.glyph);
      console.log('iconGlyph', this.iconGlyph.template);
    },
  },
};
</script>

<style>
:root {
  --svg-icon-size: 24px;
}

.icon-svg svg {
  height: var(--svg-icon-size);
  width: var(--svg-icon-size);
  stroke-width: 2;
}
</style>

<script>
import Icon from "./Icon"

export default {
  components: {Icon},
  props: {
    title: String,
    url: String,
    icon: {
      type: String,
      required: false,
    },
  },
};
</script>

<template>
  <div>
    <a v-if="icon" :href="url" target="_blank" rel="noopener" class="flex gap-1 items-center">
      <span v-if="title" class="hidden md:inline">{{ title }}</span>
      <Icon :glyph="icon" strokeWidth="0" className="w-8 h-8" />
    </a>
    <a v-else :href="url" target="_blank" rel="noopener">{{ title }}</a>
  </div>
</template>

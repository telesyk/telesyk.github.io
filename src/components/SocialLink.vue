<template>
  <a :href="url" target="_blank" rel="noopener">{{ title }}</a>
</template>

<script>
export default {
  props: {
    title: String,
    url: String,
  },
};
</script>

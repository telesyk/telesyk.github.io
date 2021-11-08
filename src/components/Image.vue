<template>
  <img
    :class="`${defaultClass} ${className}`"
    :title="title"
    :alt="title"
    :src="link"
  />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      defaultClass: "object-cover",
    };
  },
};
</script>

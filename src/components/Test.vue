<template>
  <button :title="testText">{{ testText }}</button>
</template>

<script>
export default {
  props: {
    testText: String,
  },
};
</script>

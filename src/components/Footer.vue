<template>
  <footer class="footer py-4">
    <div class="flex justify-center">
      <p>{{ config.copyright }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    config: Object,
  },
};
</script>

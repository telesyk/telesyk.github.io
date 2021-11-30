<template>
  <footer class="footer py-4">
    <div class="text-center">
      <p class="my-3">
        There where used next third-party:
        <ul>
          <li>https://tailwindcss.com/</li>
          <li>https://heroicons.com/</li>
        </ul>
      </p>
      <p class="my-3">{{ config.copyright }}</p>
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

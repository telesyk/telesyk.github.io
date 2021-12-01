<template>
  <footer class="footer py-4">
    <div class="text-center">
      <p class="my-3" v-if="config.thirdParty.links">
        {{ config.thirdParty.text }}
        <ul>
          <li v-for="(link, index) in config.thirdParty.links" :key="index">{{ link }}</li>
        </ul>
      </p>
      <p class="my-3">{{ config.copyright }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
};
</script>

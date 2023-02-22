<template>
  <footer class="footer py-4">
    <div class="text-center">
      <p class="my-3">{{ config.copyright }} {{ currentYear }}</p>
      <p class="my-3" v-if="config.links">
        <small>{{ config.thirdParty.text }}</small>
        <ul>
          <li v-for="(link, index) in config.links" :key="index">
            <a :href="link.url" target="_blank" class="underline">{{ link.name }}</a>
          </li>
        </ul>
      </p>
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
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  }
};
</script>

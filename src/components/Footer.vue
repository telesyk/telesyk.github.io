<script>
import Icon from "./Icon";

export default {
  components: { Icon },
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

<template>
  <footer class="footer">
    <div class="container mx-auto py-4 text-center">
      <p class="my-3">{{ config.copyright }} {{ currentYear }}</p>
      <p class="my-3" v-if="config.links">
        <small>{{ config.thirdParty.text }}</small>
        <ul>
          <li v-for="(link, index) in config.links" :key="index">
            <a :href="link.url" target="_blank" class="flex gap-2 justify-center underline">
              <span>{{ link.name }}</span>
              <Icon glyph="external-link" className="inline-block h-5 w-5 flex-shrink-0" />
            </a>
          </li>
        </ul>
      </p>
    </div>
  </footer>
</template>

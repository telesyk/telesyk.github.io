<template>
  <!-- card start -->
  <div class="py-6 px-6 max-w-md bg-white rounded-xl shadow-md space-y-2">
    <a
      class="block mx-auto"
      :href="config.linkSite"
      :title="`Visite ${config.title}`"
    >
      <img
        class="max-h-72 rounded-md rounded-bl-none rounded-br-none"
        :src="!config.image ? defaultImage : config.image"
        :alt="config.title"
      />
    </a>
    <div class="text-left grid grid-rows-1 grid-cols-5">
      <p class="text-black row-span-2">
        <Icon glyph="code" />
      </p>
      <p class="col-span-4 text-lg text-black font-semibold">
        <a
          :href="config.linkSite"
          :title="`Visite ${config.title}`"
          target="_blank"
        >
          <span class="capitalize">{{ config.title }}</span>
          <Icon glyph="external-link" />
        </a>
      </p>

      <p class="col-span-4 text-gray-500 font-medium">
        <a
          :href="config.linkSource"
          :title="`Source code ${config.title}`"
          target="_blank"
        >
          <span>{{ config.description }}</span>
          <Icon glyph="code" />
        </a>
      </p>
    </div>
  </div>
  <!-- card end -->
</template>

<script>
import Icon from "./Icon";

export default {
  components: { Icon },
  props: {
    config: Object,
  },
  data() {
    return {
      defaultImage: "/assets/images/screen_1.jpg",
    };
  },
};
</script>

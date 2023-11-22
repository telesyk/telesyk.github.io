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

<template>
  <div
    class="cart p-3 md:p-6 bg-accent rounded-xl shadow-md space-y-2 hover:shadow-lg"
  >
    <a
      v-if="config.imageShow && config.siteUrl"
      :href="config.siteUrl"
      :title="`Link to site ${config.title}`"
      class="block mx-auto"
      target="_blank"
    >
      <img
        class="hidden lg:block max-h-72 rounded-md rounded-bl-none rounded-br-none"
        :src="!config.image ? defaultImage : config.image"
        :alt="config.title"
      />
    </a>
    <div class="text-left h-full grid grid-rows-1 grid-cols-5 gap-2">
      <div
        class="icon-tech text-accent row-span-2 flex items-center"
      >
        <Icon 
          :glyph="config.tech"
          :strokeWidth="1" 
          className="inline w-12 h-12" 
        />
      </div>
      <div class="col-span-4 text-lg text-accent font-semibold">
        <a
          v-if="config.siteUrl"
          :href="config.siteUrl"
          :title="`Link to site ${config.title}`"
          target="_blank"
          class="flex items-center underline"
        >
          <span class="capitalize">{{ config.title }}</span>
        </a>
        <span
          v-else
          class="flex items-center"
        >
          <span class="capitalize">{{ config.title }}</span>
      </span>
      </div>
      <div class="overflow-hidden col-span-4 text-accent-shade font-medium">
        <a
          :href="config.sourceUrl"
          :title="`Link to source ${config.title}`"
          target="_blank"
          class="flex items-center gap-1"
        >
          <Icon glyph="git" className="w-6 h-6" />
          <small class="flex-1">{{ config.description ? config.description : config.title }}</small>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  .icon-tech .icon-svg svg {
    --svg-icon-size: 48px;
  }
</style>

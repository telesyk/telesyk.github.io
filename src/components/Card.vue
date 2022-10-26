<template>
  <div
    class="cart max-w-md py-6 px-6 bg-accent rounded-xl shadow-md space-y-2"
  >
    <a
      v-if="config.imageShow"
      :href="config.linkSite"
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
    <div class="text-left grid grid-rows-1 grid-cols-5">
      <div
        class="icon-tech text-accent row-span-2 flex justify-center items-center"
      >
        <Icon 
          :glyph="config.icon" 
          strokeWidth="1" 
          className="inline w-14 h-14 mt-1" 
        />
      </div>
      <div class="col-span-4 text-lg text-accent font-semibold">
        <a
          :href="config.linkSite"
          :title="`Link to site ${config.title}`"
          target="_blank"
          class="flex items-center"
        >
          <span class="capitalize">{{ config.title }}</span>
          <Icon glyph="external-link" className="ml-1 inline h-5 w-5 flex-shrink-0" />
        </a>
      </div>
      <div class="col-span-4 text-accent-shade font-medium">
        <a
          :href="config.linkSource"
          :title="`Link to source ${config.title}`"
          target="_blank"
          class="flex items-center"
        >
          <span>{{ config.description }}</span>
          <Icon glyph="code" />
        </a>
      </div>
    </div>
  </div>
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

<style>
  .icon-tech .icon-svg svg {
    --svg-icon-size: 48px;
  }
</style>

<template>
  <!-- card start -->
  <div
    class="py-6 px-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-2"
  >
    <img
      class="block mx-auto max-h-72 rounded-md rounded-bl-none rounded-br-none"
      :src="!config.image ? defaultImage : config.image"
      :alt="config.title"
    />
    <div class="text-center space-y-3 md:text-left flex flex-col">
      <p class="text-lg text-black font-semibold">
        <a
          :href="config.linkSite"
          :title="`Visite ${config.title}`"
          target="_blank"
        >
          <span class="capitalize">{{ config.title }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1 inline h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </p>

      <p class="text-gray-500 font-medium">
        <a
          :href="config.linkSource"
          :title="`Source code ${config.title}`"
          target="_blank"
        >
          <span>{{ config.description }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1 inline h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </a>
      </p>
    </div>
  </div>
  <!-- card end -->
</template>

<script>
export default {
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

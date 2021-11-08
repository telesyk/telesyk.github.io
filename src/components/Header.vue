<template>
  <header class="header flex py-4">
    <div class="flex flex-auto justify-between items-center">
      <figure v-if="config.logotype.link" :class="config.logotype.className">
        <Image :title="config.logotype.title" :link="config.logotype.link" />
      </figure>
      <div class="flex">
        <h1 class="text-2xl capitalize">{{ config.title }}</h1>
      </div>
      <ul class="">
        <li v-for="social in socialMedia" :key="social.title">
          <SocialLink :title="social.title" :url="social.link" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Image from "./Image";
import SocialLink from "./SocialLink";

export default {
  props: {
    socialMedia: Array,
    config: Object,
  },
  components: {
    Image,
    SocialLink,
  },
  data() {
    return {};
  },
};
</script>

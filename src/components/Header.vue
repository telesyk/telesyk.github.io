<template>
  <header class="header flex py-4">
    <div class="flex flex-auto justify-between items-center">
      <figure v-if="config.logotype.link" :class="config.logotype.className">
        <Image :title="config.logotype.title" :link="config.logotype.link" />
      </figure>

      <div class="flex">
        <h1 class="text-2xl capitalize">{{ config.title }}</h1>
      </div>

      <ul class="md:flex md:justify-end md:items-center md:gap-x-4">
        <li v-for="social in socialMedia" :key="social.title">
          <SocialLink class="p-3" :title="social.title" :url="social.link" />
        </li>

        <li v-if="config.theme.dark">
          <button 
            class="py-3 px-4 button-accent"
            :title="'Switch to ' + switchTheme"
            @click.prevent="onSwitchTheme"
          >
            {{ switchButtonName }}
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Image from "./Image";
import SocialLink from "./SocialLink";
import { setCapitalize, isPrefersDarkSheme } from '@/helpers';

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
    return {
      switchTheme: isPrefersDarkSheme() ? this.config.theme.light : this.config.theme.dark,
      switchButtonName: '',
    }
  },
  mounted() {
    this.switchButtonName = setCapitalize( this.switchTheme );
  },
  methods: {
    onSwitchTheme() {
      const isCurrentDark = isPrefersDarkSheme();
      const htmlDoc = document.documentElement;
      // const isLightClass = htmlDoc.classList.contains(this.config.theme.light);

      if (isCurrentDark) {
        htmlDoc.classList.toggle(this.config.theme.light);
        this.switchTheme = this.config.theme.dark;
        // this.switchButtonName = setCapitalize( this.switchTheme );
      } else {
        htmlDoc.classList.toggle(this.config.theme.dark);
        this.switchTheme = this.config.theme.light;
        // this.switchButtonName = setCapitalize( this.switchTheme );
      }
    },
  },
};
</script>

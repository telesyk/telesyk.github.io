<template>
  <header class="header flex py-4">
    <div class="flex flex-auto justify-between items-center">
      <figure v-if="config.logotype.link" :class="config.logotype.className">
        <Image :title="config.logotype.title" :link="config.logotype.link" />
      </figure>

      <div class="flex">
        <h1 class="text-2xl capitalize">{{ config.title }}</h1>
      </div>

      <ul class="text-right md:text-center md:flex md:justify-end md:items-center md:gap-x-4">
        <li v-for="social in socialMedia" :key="social.title">
          <SocialLink class="p-3" :title="social.title" :url="social.link" />
        </li>

        <li 
          v-if="colorTheme.dark"
          class="pr-3 md:pr-0"
        >
          <button 
            class="inline-flex md:flex px-4 rounded-md button button-accent text-xs p-2"
            :title="'Switch to ' + switchTheme"
            @click.prevent="onSwitchTheme"
          >
            <span class="hidden md:inline">{{ getSwithcButtonName() }}</span>
            <Icon 
              glyph="color-swatch"
              className="ml-1 inline h-4 w-4"
            />
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Image from "./Image";
import SocialLink from "./SocialLink";
import Icon from "./Icon";
import { setCapitalize, isPrefersDarkSheme } from '@/helpers';

export default {
  components: {
    Image,
    SocialLink,
    Icon,
  },
  props: {
    socialMedia: Array,
    config: Object,
  },
  data() {
    return {
      switchTheme: '',
      rootElementClassList: document.documentElement.classList,
      colorTheme: this.config.theme,
    }
  },
  created() {
    this.rootElementClassList.toggle( isPrefersDarkSheme() ? this.colorTheme.dark : this.colorTheme.light );
    this.switchTheme = isPrefersDarkSheme() ? this.colorTheme.light : this.colorTheme.dark;
  },
  methods: {
    getSwithcButtonName() {
      return setCapitalize( this.switchTheme );
    },
    onSwitchTheme() {
      const isLightClassName = this.rootElementClassList.contains(this.colorTheme.light);
      const switchClassNames = () => {
        this.rootElementClassList.toggle(this.colorTheme.light);
        this.rootElementClassList.toggle(this.colorTheme.dark);
      }

      if (!isLightClassName) {
        this.switchTheme = this.colorTheme.dark;
        switchClassNames();
        this.getSwithcButtonName();
        localStorage.setItem('colorSheme', 'light');
      } else {
        this.switchTheme = this.colorTheme.light;
        switchClassNames();
        this.getSwithcButtonName();
        localStorage.setItem('colorSheme', 'dark');
      }
    },
  },
};
</script>

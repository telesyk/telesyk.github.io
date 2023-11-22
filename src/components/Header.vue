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
      switchThemeTitle: '',
      rootElementClassList: document.documentElement.classList,
      colorTheme: this.config.theme,
    }
  },
  created() {
    this.rootElementClassList.toggle( isPrefersDarkSheme() ? this.colorTheme.dark : this.colorTheme.light );
    this.switchThemeTitle = isPrefersDarkSheme() ? this.colorTheme.light : this.colorTheme.dark;
  },
  methods: {
    getSwithcButtonName() {
      return setCapitalize( this.switchThemeTitle );
    },
    onSwitchTheme() {
      const isLightClassName = this.rootElementClassList.contains(this.colorTheme.light);
      const switchClassNames = () => {
        this.rootElementClassList.toggle(this.colorTheme.light);
        this.rootElementClassList.toggle(this.colorTheme.dark);
      }

      if (!isLightClassName) {
        this.switchThemeTitle = this.colorTheme.dark;
        switchClassNames();
        this.getSwithcButtonName();
        localStorage.setItem('colorSheme', 'light');
      } else {
        this.switchThemeTitle = this.colorTheme.light;
        switchClassNames();
        this.getSwithcButtonName();
        localStorage.setItem('colorSheme', 'dark');
      }
    },
  },
};
</script>

<template>
  <header class="header sticky left-0 top-0 backdrop-filter backdrop-blur">
    <div class="container xl:max-w-screen-xl mx-auto py-4 px-4 lg:px-0 md:py-8 flex flex-auto justify-between items-center">
      <figure v-if="config.logotypeUrl" :class="config.logotype.className">
        <Image :title="config.logotype.title" :link="config.logotypeUrl" />
      </figure>

      <div class="flex" :class="config.logotypeUrl ? 'flex-1 ml-2' : ''">
        <h1 class="text-2xl capitalize">{{ config.title }}</h1>
      </div>

      <ul class="flex justify-end items-center gap-4 text-center">
        <li v-for="social in socialMedia" :key="social.title" class="block">
          <SocialLink class="inline-block py-1 md:p-2" :icon="social.title" :url="social.link" />
        </li>

        <li
          class="block"
        >
          <button 
            class="py-2 inline-flex items-center md:flex transition-all"
            :title="'Switch to ' + switchThemeTitle"
            @click.prevent="onSwitchTheme"
          >
            <span class="hidden md:inline">{{ getSwithcButtonName() }}</span>
            <Icon 
              v-if="switchThemeTitle === 'dark'"
              glyph="moon"
              className="inline ml-1 h-8 w-8 p-2 rounded-full button button-accent"
            />
            <Icon 
              v-else
              glyph="sun"
              className="inline ml-1 h-8 w-8 p-2 rounded-full button button-accent"
            />
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

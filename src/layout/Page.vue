<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
  props: {
    sectionsConfig: {
      type: Object,
      required: true,
    },
    siteConfig: {
      type: Object,
      required: true,
    },
    pageName: String,
  },
  data() {
    return {
      headerConfig: {
        ...this.sectionsConfig.header,
        title: this.siteConfig.name,
        theme: this.siteConfig.theme,
        logotypeUrl: null,
      },
    }
  },
  mounted() {
    document.title = !this.pageName ? this.siteConfig.name : `${this.siteConfig.name} | ${this.pageName}`;
  },
  beforeUpdate() {
    this.headerConfig = {
      ...this.headerConfig,
      logotypeUrl: this.sectionsConfig.logotypeUrl,
    }
  },
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header
      :socialMedia="sectionsConfig.socials"
      :config="headerConfig"
    />

    <main class="main py-4 flex-grow">
      <div class="container mx-auto px-4 md:px-0">
        <slot name="main"></slot>
      </div>
    </main>

    <Footer :config="sectionsConfig.footer" />
  </div>
</template>

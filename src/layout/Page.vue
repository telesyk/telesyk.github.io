<template>
  <div class="container flex flex-col min-h-screen mx-auto">
    <Header
      :socialMedia="pageConfig.socials"
      :config="headerConfig"
    />

    <main class="main py-5 flex-grow">
      <slot name="main"></slot>
    </main>

    <Footer :config="pageConfig.footer" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Page",
  components: {
    Header,
    Footer,
  },
  props: {
    pageConfig: {
      type: Object,
      required: true,
    },
    siteConfig: {
      type: Object,
      required: true,
    },
    pageName: String,
  },
  mounted() {
    document.title = !this.pageName ? this.siteConfig.name : `${this.siteConfig.name} | ${this.pageName}`;
  },
  data() {
    return {
      headerConfig: { 
        ...this.pageConfig.header,
        title: this.siteConfig.name,
        theme: this.siteConfig.theme,
      }
    }
  },
};
</script>

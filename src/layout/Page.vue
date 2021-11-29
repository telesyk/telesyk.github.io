<template>
  <div class="container flex flex-col min-h-screen mx-auto">
    <Header :socialMedia="config.socials" :config="config.header" />

    <main class="main py-5 flex-grow">
      <slot name="main"></slot>
    </main>

    <Footer :config="config.footer" />
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
    config: {
      type: Object,
      required: true,
    },
  },
};
</script>

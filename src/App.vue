<template>
<!-- App component only through store deeper into app -->
<!-- Prop 'pageName' should accept value depends on active page -->
  <Page :pageConfig="page" :siteConfig="site" :pageName="pages.home">
    <template v-slot:main>
      <Home :cards="cards" />
    </template>
  </Page>
</template>

<script>
import Page from "@/layout/Page";
import Home from "@/page/Home";
import store from "@/store.js";

export default {
  name: "App",
  components: {
    Page,
    Home,
  },
  data() {
    return {
      site: { ...store.site },
      pages: { ...store.pages },
      page: { ...store.page },
      cards: [ ...store.cards ],
    };
  },
};
</script>

<template>
<!-- In case of pages there should should be some router -->
  <Page :config="page" :siteName="site.name" :pageName="pages.home">
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

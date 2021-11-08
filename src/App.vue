<template>
  <Page :config="store.page">
    <template v-slot:main>
      <Home :cards="store.cards" />
    </template>
  </Page>
</template>

<script>
import Page from "./layout/Page";
import Home from "./page/Home";
import store from "./store.js";

export default {
  name: "App",
  components: {
    Page,
    Home,
  },
  data() {
    return {
      store: { ...store },
    };
  },
};
</script>

<script>
import Page from "@/layout/Page";
import Home from "@/page/Home";
import store from "@/store.js";

export default {
  components: {
    Page,
    Home,
  },
  data() {
    return {
      site: { ...store.site },
      pages: { ...store.pages },
      page: { ...store.page },
      fetchedData: null,
      fetchError: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const res = await fetch('https://api.github.com/users/telesyk/repos');
        const data = await res.json();

        if (!res.ok && res.status >= 400) throw new Error(`${res.status}: ${res.statusText}`);
        
        this.fetchedData = await data.map(repo => {
          return {
            id: repo.id,
            title: repo.name,
            created: repo.created_at,
            description: repo.description,
            siteUrl: repo.homepage,
            sourceUrl: repo.html_url,
            tech: repo.language,
          }
        });
       
      } catch(error) {
        console.error(error);
        this.fetchError = true;
      }
    }
  }
};
</script>

<template>
  <Page :pageConfig="page" :siteConfig="site" :pageName="pages.home">
    <template v-slot:main>
      <Home :fetchedData="fetchedData" :isError="fetchError" />
    </template>
  </Page>
</template>

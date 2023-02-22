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
      sections: { ...store.page },
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
        
        if (!res.ok && res.status >= 400) throw new Error(`${res.status}: ${res.statusText}`);
        
        const data = await res.json();
        
        this.sections = {
          ...this.sections,
          logotypeUrl: data[0].owner.avatar_url,
        }
        
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
  <Page :sectionsConfig="sections" :siteConfig="site" :pageName="pages.home">
    <template v-slot:main>
      <Home :fetchedData="fetchedData" :isError="fetchError" />
    </template>
  </Page>
</template>

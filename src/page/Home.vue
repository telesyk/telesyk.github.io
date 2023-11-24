<script>
import Card from "@/components/Card";
import { getFilteredByDateData } from "../helpers";

export default {
  components: {
    Card,
  },
  props: {
    fetchedData: Array || null,
    isError: Boolean || null,
  },
  data() {
    return {
      fetchedRepos: [],
      isDataLoading: null,
    }
  },
  created() {
    this.isDataLoading = true;
  },
  beforeUpdate() {
    this.fetchedRepos = getFilteredByDateData(this.fetchedData.map(repo => repo));
    this.isDataLoading = false;
  },
};
</script>

<template>
  <div 
    class="cart-list flex flex-wrap justify-center py-6"
    v-if="fetchedRepos && fetchedRepos.length"
  >
    <Card v-for="repo in fetchedRepos" :key="repo.id" :config="repo" />
  </div>
  <div
    v-if="isDataLoading"
    class="max-w-screen-md mx-auto py-6"
  >
    <p>Data is loading...</p>
  </div>
  <div
    v-if="isError"
    class="max-w-screen-md mx-auto py-6"
  >
    <p>Upss... Got an error.</p>
  </div>
</template>

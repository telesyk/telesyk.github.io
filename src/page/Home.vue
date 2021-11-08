<template>
  <div class="flex flex-col md:flex-row gap-6 p-6">
    <Card v-for="card in cards" :key="card.title" :config="card" />
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  props: {
    cards: Array,
  },
  components: {
    Card,
  },
};
</script>

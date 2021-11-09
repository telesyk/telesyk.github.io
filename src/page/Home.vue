<template>
  <div class="flex flex-wrap justify-center xl:justify-between gap-6 p-y-6">
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

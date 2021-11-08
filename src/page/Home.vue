<template>
  <div
    class="flex flex-col md:flex-row gap-6 p-6"
    v-for="card in cards"
    :key="card.title"
  >
    <Card :config="card" />
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

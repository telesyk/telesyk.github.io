<template>
  <div class="max-w-screen-md mx-auto flex flex-wrap justify-center gap-6 p-y-6">
    <Card v-for="card in cards" :key="card.title" :config="card" />
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  components: {
    Card,
  },
  props: {
    cards: Array,
  },
};
</script>

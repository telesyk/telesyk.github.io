<template>
  <div class="cart-list max-w-screen-md mx-auto flex flex-wrap justify-center p-y-6">
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

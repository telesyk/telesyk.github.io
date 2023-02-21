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

<template>
  <div 
    class="cart-list max-w-screen-md mx-auto flex flex-wrap justify-center p-y-6"
    v-if="cards.length"
  >
    <Card v-for="card in cards" :key="card.title" :config="card" />
  </div>
  <div 
    v-else
    class="max-w-screen-md mx-auto p-y-6"
  >
    <p>No GitHub projects...</p>
  </div>
</template>

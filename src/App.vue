<template>
  <div>
    <nav class="bg-yellow-400 text-white p-4 flex justify-between items-center">
      <router-link to="/" class="font-bold text-xl">E-commerce</router-link>
      <router-link
        to="/cart"
        class="relative hover:underline"
      >
        Carrinho
        <span
          v-if="cartCount > 0"
          class="absolute -top-2 -right-3 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center"
        >
          {{ cartCount }}
        </span>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useCart } from './composables/useCart.js';

export default {
  setup() {
    const { cart } = useCart();

    const cartCount = computed(() =>
      cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );

    return { cartCount };
  },
};
</script>

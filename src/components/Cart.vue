<template>
  <div class="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 overflow-y-auto z-50">
    <h2 class="text-xl font-bold mb-4">Carrinho</h2>
    <div v-if="cart.items.length === 0">Seu carrinho está vazio.</div>
    <ul>
      <li v-for="item in cart.items" :key="item.id" class="mb-4 border-b pb-2">
        <div class="flex justify-between items-center">
          <div>
            <p class="font-semibold">{{ item.title }}</p>
            <p>Qtd: {{ item.quantity }}</p>
            <p>R$ {{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
          <button @click="remove(item.id)" class="text-red-600 font-bold">X</button>
        </div>
      </li>
    </ul>

    <div v-if="cart.items.length > 0" class="mt-4">
      <p class="font-bold">Total: R$ {{ cart.total.toFixed(2) }}</p>
      <button @click="clear" class="mt-2 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Limpar Carrinho</button>
    </div>
  </div>
</template>

<script>
import { cart } from '../store/cart.js';

export default {
  name: 'Cart',
  setup() {
    return { cart };
  },
  methods: {
    remove(id) {
      this.cart.removeItem(id);
    },
    clear() {
      this.cart.clear();
    }
  }
};
</script>

<template>
  <div class="container mx-auto max-w-4xl p-6 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Carrinho de Compras</h1>

    <div v-if="cart.items.length === 0" class="text-center text-gray-700">
      Seu carrinho está vazio.
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="bg-white p-4 rounded-lg shadow flex items-center gap-4"
      >
        <img
          :src="item.thumbnail"
          :alt="item.title"
          class="w-20 h-20 object-cover rounded"
        />
        <div class="flex-1">
          <h2 class="font-semibold text-lg">{{ item.title }}</h2>
          <p class="text-yellow-600 font-bold">
            R$ {{ item.price.toFixed(2).replace('.', ',') }}
          </p>
          <p class="text-gray-600 text-sm">Categoria: {{ item.category }}</p>
        </div>
        <div class="flex flex-col items-center gap-2">
          <input
            type="number"
            min="1"
            v-model.number="item.quantity"
            @change="updateQuantity(item.id, item.quantity)"
            class="w-16 border rounded px-2 py-1 text-center"
          />
          <button
            @click="removeFromCart(item.id)"
            class="text-red-500 hover:text-red-700 font-semibold"
          >
            Remover
          </button>
        </div>
      </div>

      <div class="text-right font-bold text-xl mt-6">
        Total: R$ {{ cartTotal.toFixed(2).replace('.', ',') }}
      </div>
    </div>

    <button
      @click="$router.push('/')"
      class="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded"
    >
      Continuar Comprando
    </button>
  </div>
</template>

<script>
import { useCart } from '../composables/useCart.js';

export default {
  name: 'CartView',
  setup() {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    return {
      cart,
      removeFromCart,
      updateQuantity,
      cartTotal,
    };
  },
};
</script>

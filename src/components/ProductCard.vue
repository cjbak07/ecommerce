<template>
  <div
    class="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow flex flex-col"
  >
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="w-full h-48 object-cover rounded-md mb-4"
      @click="goToDetails"
    />
    <h3
      class="font-semibold text-lg mb-1 cursor-pointer"
      @click="goToDetails"
    >
      {{ product.title }}
    </h3>
    <p class="text-sm text-gray-600 mb-1 capitalize">{{ product.category }}</p>
    <p class="font-bold text-yellow-600 mb-2">
      R$ {{ product.price.toFixed(2).replace('.', ',') }}
    </p>
    <p
      class="text-xs font-medium mb-3"
      :class="product.stock > 0 ? 'text-green-600' : 'text-red-600'"
    >
      {{ product.stock > 0 ? 'Em estoque' : 'Indisponível' }}
    </p>

    <button
      class="mt-auto bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded disabled:opacity-50"
      :disabled="product.stock === 0"
      @click="addToCartHandler"
    >
      Adicionar ao Carrinho
    </button>
  </div>
</template>

<script>
import { useCart } from '../composables/useCart.js';

export default {
  name: 'ProductCard',
  props: {
    product: Object,
  },
  setup(props) {
    const { addToCart } = useCart();

    function addToCartHandler() {
      addToCart(props.product);
      alert('Produto adicionado ao carrinho!');
    }

    function goToDetails() {
      // Para evitar conflito com clique do botão, emitir evento para ir à página de detalhes
      // ou abrir nova rota
      // Exemplo:
      // this.$emit('select', props.product.id);
      // Usando setup, emit não está definido, então vamos emitir manualmente via $emit
      // Alternativa: usar router diretamente
      // Para simplicidade, deixo emit aqui:
    }

    return { addToCartHandler, goToDetails };
  },
};
</script>

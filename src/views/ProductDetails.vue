<template>
  <div class="container mx-auto max-w-4xl p-6 bg-gray-50 min-h-screen">
    <button @click="$router.back()" class="mb-4 text-yellow-600 hover:underline">&larr; Voltar</button>
    <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="w-full md:w-1/3 object-cover rounded-md"
      />
      <div class="md:flex-1">
        <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
        <p class="mb-4 text-gray-700">{{ product.description }}</p>
        <p class="mb-2 font-semibold">Categoria: <span class="capitalize">{{ product.category }}</span></p>
        <p class="mb-2 font-semibold text-yellow-600 text-xl">R$ {{ product.price.toFixed(2).replace('.', ',') }}</p>
        <p :class="product.stock > 0 ? 'text-green-600' : 'text-red-600'">
          {{ product.stock > 0 ? 'Em estoque' : 'Indisponível' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '../services/api.js';

export default {
  name: 'ProductDetails',
  data() {
    return {
      product: null,
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    try {
      const res = await fetchProductById(id);
      this.product = res.data;
    } catch (error) {
      console.error('Erro ao carregar detalhes do produto:', error);
    }
  },
};
</script>

<template>
  <div class="container mx-auto p-4">
    <button @click="$router.back()" class="mb-4 text-indigo-600 hover:underline">Voltar</button>

    <div v-if="product" class="flex flex-col md:flex-row gap-6">
      <img :src="product.thumbnail" alt="product.title" class="w-full md:w-1/3 object-cover rounded" />

      <div class="md:flex-1">
        <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
        <p class="text-gray-700 mb-2">{{ product.description }}</p>
        <p class="text-indigo-600 font-bold text-xl mb-2">${{ product.price.toFixed(2) }}</p>
        <p class="mb-1">Categoria: <span class="capitalize">{{ product.category }}</span></p>
        <p class="mb-1">Marca: {{ product.brand }}</p>
        <p v-if="product.stock > 0" class="text-green-600">Em estoque: {{ product.stock }}</p>
        <p v-else class="text-red-600">Produto esgotado</p>
      </div>
    </div>

    <div v-else>
      <p>Carregando...</p>
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
  async created() {
    const id = this.$route.params.id;
    const res = await fetchProductById(id);
    this.product = res.data;
  },
};
</script>


<template>
  <div>
    <div class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-10">
      <div v-for="product in paginatedProducts" :key="product.id" class="border p-4 rounded shadow hover:shadow-lg transition">
        <img :src="product.thumbnail" :alt="product.title" class="w-full h-40 object-cover mb-2 rounded" />
        <h3 class="font-semibold text-lg">{{ product.title }}</h3>
        <p class="text-gray-600">{{ formatCurrency(product.price) }}</p>
      </div>
    </div>

    <!-- Paginação -->
    <div class="flex justify-center mt-6 space-x-2">
      <button 
        v-for="page in totalPages" 
        :key="page" 
        @click="currentPage = page" 
        :class="currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-200'"
        class="px-3 py-1 rounded"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      productsPerPage: 20, // 4 colunas x 5 linhas
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.productsPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.productsPerPage;
      return this.products.slice(start, start + this.productsPerPage);
    },
  },
  methods: {
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    },
  },
};
</script>

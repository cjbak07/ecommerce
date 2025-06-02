<template>
  <div class="container mx-auto max-w-7xl p-6 bg-gray-50 min-h-screen">
    <div class="flex flex-col md:flex-row gap-8">

      <!-- Menu lateral de categorias -->
      <aside class="md:w-1/4 bg-white rounded-lg shadow-lg p-6 sticky top-6 h-fit">
        <h2 class="text-xl font-bold mb-4 text-gray-800">Categorias</h2>
        <CategoryMenu
          :categories="categories"
          :selectedCategory="selectedCategory"
          @select-category="handleCategorySelect"
        />
      </aside>

      <!-- Conteúdo principal -->
      <main class="md:flex-1 bg-white rounded-lg shadow-lg p-8">

        <!-- Busca -->
        <input
          v-model="searchQuery"
          @input="handleSearch"
          type="text"
          placeholder="Buscar produtos..."
          class="border border-gray-300 p-3 rounded-lg w-full mb-6
                 focus:outline-none focus:ring-4 focus:ring-yellow-400
                 transition duration-300 ease-in-out"
        />

        <!-- Ordenação -->
        <div class="mb-6 flex items-center gap-4">
          <label for="sort" class="font-semibold text-gray-700 whitespace-nowrap">
            Ordenar por:
          </label>
          <select
            id="sort"
            v-model="sortOrder"
            @change="loadProducts"
            class="border border-gray-300 p-2 rounded-lg
                   focus:outline-none focus:ring-4 focus:ring-yellow-400
                   transition duration-300 ease-in-out"
          >
            <option value="">Padrão</option>
            <option value="price-asc">Preço: menor para maior</option>
            <option value="price-desc">Preço: maior para menor</option>
            <option value="title-asc">Nome: A a Z</option>
            <option value="title-desc">Nome: Z a A</option>
          </select>
        </div>

        <!-- Grid responsivo com produtos -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProductCard
            v-for="product in displayedProducts"
            :key="product.id"
            :product="product"
            @select="goToDetails"
          />
        </div>

        <!-- Paginação -->
        <Pagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          @change-page="changePage"
          class="mt-8"
        />
      </main>

    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import Pagination from '../components/Pagination.vue';
import CategoryMenu from '../components/CategoryMenu.vue';

import {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
  searchProducts
} from '../services/api.js';

export default {
  name: 'HomeView',
  components: {
    ProductCard,
    Pagination,
    CategoryMenu,
  },
  data() {
    return {
      sortOrder: '',
      products: [],
      categories: [],
      selectedCategory: null,
      searchQuery: '',
      currentPage: 1,
      limit: 18, // Produtos por página
      totalProducts: 0,
    };
  },
  computed: {
    displayedProducts() {
      return this.products;
    },
    totalPages() {
      return Math.ceil(this.totalProducts / this.limit);
    }
  },
  methods: {
    async loadCategories() {
      try {
        const res = await fetchCategories();
        this.categories = res.data;
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    },
    async loadProducts() {
      try {
        const skip = (this.currentPage - 1) * this.limit;
        let res;

        if (this.searchQuery) {
          res = await searchProducts(this.searchQuery);
          this.products = res.data.products;
          this.totalProducts = res.data.total;
        } else if (this.selectedCategory) {
          res = await fetchProductsByCategory(this.selectedCategory, this.limit, skip);
          this.products = res.data.products;
          this.totalProducts = res.data.total;
        } else {
          res = await fetchProducts(this.limit, skip);
          this.products = res.data.products;
          this.totalProducts = res.data.total;
        }

        // Ordenação
        if (this.sortOrder) {
          if (this.sortOrder === 'price-asc') {
            this.products.sort((a, b) => a.price - b.price);
          } else if (this.sortOrder === 'price-desc') {
            this.products.sort((a, b) => b.price - a.price);
          } else if (this.sortOrder === 'title-asc') {
            this.products.sort((a, b) => a.title.localeCompare(b.title));
          } else if (this.sortOrder === 'title-desc') {
            this.products.sort((a, b) => b.title.localeCompare(a.title));
          }
        }
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    },
    handleCategorySelect(category) {
      this.selectedCategory = category;
      this.currentPage = 1;
      this.loadProducts();
    },
    handleSearch() {
      this.selectedCategory = null;
      this.currentPage = 1;
      this.loadProducts();
    },
    changePage(page) {
      this.currentPage = page;
      this.loadProducts();
    },
    goToDetails(productId) {
      this.$router.push(`/product/${productId}`);
    }
  },
  mounted() {
    this.loadCategories();
    this.loadProducts();
  }
};
</script>

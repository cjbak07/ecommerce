<template>
  <div class="flex justify-center items-center gap-2">
    <button
      class="px-3 py-1 rounded bg-yellow-400 text-black disabled:opacity-50"
      :disabled="currentPage === 1"
      @click="$emit('change-page', currentPage - 1)"
    >
      Anterior
    </button>

    <button
      v-for="page in pages"
      :key="page"
      class="px-3 py-1 rounded cursor-pointer"
      :class="page === currentPage ? 'bg-yellow-500 text-white font-bold' : 'bg-yellow-100'"
      @click="$emit('change-page', page)"
    >
      {{ page }}
    </button>

    <button
      class="px-3 py-1 rounded bg-yellow-400 text-black disabled:opacity-50"
      :disabled="currentPage === totalPages"
      @click="$emit('change-page', currentPage + 1)"
    >
      Próximo
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  computed: {
    pages() {
      // Gera array simples de páginas (exemplo simples)
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
  },
};
</script>

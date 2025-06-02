<template>
  <div class="flex justify-center mt-6 space-x-2">
    <button
      :disabled="currentPage === 1"
      @click="$emit('change-page', currentPage - 1)"
      class="px-3 py-1 border rounded disabled:opacity-50"
    >
      Anterior
    </button>

    <button
      v-for="page in pages"
      :key="page"
      @click="$emit('change-page', page)"
      :class="['px-3 py-1 border rounded', { 'bg-indigo-600 text-white': page === currentPage }]"
    >
      {{ page }}
    </button>

    <button
      :disabled="currentPage === totalPages"
      @click="$emit('change-page', currentPage + 1)"
      class="px-3 py-1 border rounded disabled:opacity-50"
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
      const pages = [];
      for(let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }
  }
}
</script>

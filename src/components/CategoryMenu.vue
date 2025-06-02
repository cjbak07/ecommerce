<template>
  <div class="flex flex-wrap gap-2 py-2">
    <button
      v-for="category in categories"
      :key="category"
      class="inline-block px-4 py-2 mr-2 bg-gray-200 rounded hover:bg-yellow-400 transition"
      @click="selectCategory(category)"
    >
      {{ category.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['categories'],
  methods: {
    selectCategory(cat) {
      this.$emit('select-category', cat);
    }
  }
}
</script>

<template>
  <ul>
    <li
      v-for="category in categories"
      :key="category"
      class="mb-2 cursor-pointer px-3 py-1 rounded hover:bg-yellow-100"
      :class="selectedCategory === category ? 'bg-yellow-300 font-semibold' : ''"
      @click="$emit('select-category', category)"
    >
      {{ category.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CategoryMenu',
  props: {
    categories: Array,
    selectedCategory: String,
  },
};
</script>

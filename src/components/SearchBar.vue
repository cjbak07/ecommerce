<template>
  <input
    v-model="searchTerm"
    type="text"
    placeholder="Buscar produtos..."
    class="border rounded p-2 w-full mb-4"
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'SearchBar',
  emits: ['update:search'],
  data() {
    return { searchTerm: '' };
  },
  methods: {
    onInput() {
      this.$emit('update:search', this.searchTerm);
    },
  },
};
</script>

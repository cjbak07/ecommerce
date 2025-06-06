<template>
  <div class="flex flex-wrap gap-2 py-2">
    <button
      v-for="category in filteredCategories"
      :key="category.name"
      class="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-yellow-400 transition text-sm capitalize"
      @click="selectCategory(category.name)"
    >
      <i :class="getIconClass(category.name)" class="w-4 h-4"></i>
      {{ category.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['categories'],
  computed: {
    filteredCategories() {
      const hiddenCategories = [
        'home decoration',
        'kitchen accessories',
        'mens shirts',
        'mens shoes',
        'mens watches',
        'mens mobile',
        'mobile accessories',
        'skin care',
        'sports accessories',
        'womens bags',
        'womens dresses',
        'womens jewellery',
        'womens shoes',
        'womens watches'
      ];

      return this.categories.filter(cat =>
        !hiddenCategories.includes(cat.name.toLowerCase())
      );
    }
  },
  methods: {
    selectCategory(categoryName) {
      this.$emit('select-category', categoryName);
    },
    getIconClass(categoryName) {
      const iconMap = {
        smartphones: 'fas fa-mobile-alt',
        laptops: 'fas fa-laptop',
        fragrances: 'fas fa-spray-can',
        skincare: 'fas fa-heart',
        groceries: 'fas fa-shopping-basket',
        'home-decoration': 'fas fa-couch',
        furniture: 'fas fa-chair',
        tops: 'fas fa-tshirt',
        'womens-dresses': 'fas fa-female',
        'womens-shoes': 'fas fa-shoe-prints',
        'mens-shirts': 'fas fa-male',
        'mens-shoes': 'fas fa-shoe-prints',
        'mens-watches': 'fas fa-clock',
        'womens-watches': 'fas fa-clock',
        'womens-bags': 'fas fa-shopping-bag',
        'womens-jewellery': 'fas fa-gem',
        sunglasses: 'fas fa-sun',
      };

      return iconMap[categoryName.toLowerCase()] || 'fas fa-tag';
    }
  }
};
</script>

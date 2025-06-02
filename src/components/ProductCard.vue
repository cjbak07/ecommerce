<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer
           hover:shadow-xl transition-shadow duration-300 flex flex-col"
    @click="$emit('select', product.id)"
  >
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="w-full h-48 object-cover"
    />
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="text-lg font-semibold mb-2 truncate">{{ product.title }}</h3>
      <p class="text-gray-600 flex-grow">{{ product.description }}</p>
      <div class="mt-4 font-bold text-blue-600 text-lg">${{ product.price.toFixed(2) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object,
  },
};
</script>

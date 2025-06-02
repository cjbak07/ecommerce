import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export function fetchProducts(limit = 18, skip = 0) {
  return api.get(`/products?limit=${limit}&skip=${skip}`);
}

export function fetchProductById(id) {
  return api.get(`/products/${id}`);
}

export function fetchCategories() {
  return api.get('/products/categories');
}

export function fetchProductsByCategory(category, limit = 18, skip = 0) {
  return api.get(`/products/category/${category}?limit=${limit}&skip=${skip}`);
}

export function searchProducts(query) {
  return api.get(`/products/search?q=${encodeURIComponent(query)}`);
}

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const fetchProducts = (limit = 10, skip = 0) => {
  return api.get(`/products?limit=${limit}&skip=${skip}`);
};

export const fetchProductById = (id) => {
  return api.get(`/products/${id}`);
};

export const fetchCategories = () => {
  return api.get('/products/categories');
};

export const fetchProductsByCategory = (category, limit = 10, skip = 0) => {
  return api.get(`/products/category/${category}?limit=${limit}&skip=${skip}`);
};

export const searchProducts = (query) => {
  return api.get(`/products/search?q=${query}`);
};

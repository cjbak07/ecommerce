import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Importação de views
import HomeView from './views/HomeView.vue';
import ProductDetails from './views/ProductDetails.vue';

// Importação global de estilos (TailwindCSS)
import './assets/tailwind.css';

// Definição das rotas
const routes = [
  { path: '/', component: HomeView },
  { path: '/product/:id', component: ProductDetails },
];

// Configuração do roteador
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Criação e montagem do app
createApp(App)
  .use(router)
  .mount('#app');

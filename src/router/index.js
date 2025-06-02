import CartView from '../views/CartView.vue';
import HomeView from '../views/HomeView.vue';
import ProductDetails from '../views/ProductDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetails },
  { path: '/cart', name: 'Cart', component: CartView },
];

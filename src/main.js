import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './index.css'; // Tailwind CSS import (gerado via Vite)

const app = createApp(App);

app.use(router);

app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import './index.css'; // Ensure you have a global CSS file for styles
import '@fortawesome/fontawesome-free/css/all.css';



const app = createApp(App);
app.use(router);
app.mount('#app');

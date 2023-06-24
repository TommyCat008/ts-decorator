import {createApp} from 'vue';
import './style.css';
import {createPinia} from 'pinia';
import App from './App.vue';
// import decorator from './useHooks/useDecorator.ts';
// import usePermission from './useHooks/usePermission.ts';

const pinia = createPinia();

createApp(App).use(pinia).mount('#app');

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import YmapPlugin from 'vue-yandex-maps' 



createApp(App).use(router).use(YmapPlugin).mount('#app')

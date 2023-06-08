import { createApp } from 'vue'
import './style.css'
import './iconfont.css'
import './common.css'
import App from './App.vue'
import { router } from './router/index'
createApp(App).use(router).mount('#app')

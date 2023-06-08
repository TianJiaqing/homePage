import { createApp } from 'vue'
import './style.css'
import './iconfont.css'
import './common.css'
import App from './App.vue'
import { router } from './router/index'

import { v_directive } from '@utils/vue_instruct'
const app = createApp(App)
app.use(router).use(v_directive).mount('#app')

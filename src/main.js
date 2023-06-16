import { createApp } from 'vue'
import './style/style.css'
import './style/iconfont.css'
import './style/common.css'
import './font_family/font_family.css'

import App from './App.vue'
import { router } from './router/index'

import { v_directive } from '@utils/vue_instruct'
const app = createApp(App)
app.use(router).use(v_directive).mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
// // 1.1 导入路由的包
import VueRouter from 'vue-router'
// // 1.2 安装路由
Vue.use(VueRouter)


Vue.config.productionTip = false

//引入mui css
import './lib/mui/css/mui.min.css'
//引入字体图标
import './lib/mui/css/icons-extra.css'
// 按需导入需要的mint-ui组件
import {
  Header
} from 'mint-ui'

Vue.component(Header.name, Header)


// 导入 App 根组件
// import app from './App.vue'

new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})


import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'


const app = new Vue({
  store,
  ...App
})

export { app, store }

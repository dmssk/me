import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Works from './Works.vue'
import Home from './Home.vue'
import "vue-material-design-icons/styles.css"
Vue.use(VueRouter);

const routes = [
  {path: '/works', component: Works},
  {path: '/', component: Home},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});


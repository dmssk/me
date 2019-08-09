import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Gallery from './Gallery.vue'
import "vue-material-design-icons/styles.css"

Vue.use(VueRouter);

const routes = [
  {path: '/gallery', component: Gallery},
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


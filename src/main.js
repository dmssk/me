import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Works from './Works.vue'
import Home from './Home.vue'
import VueI18n from 'vue-i18n'
import CountryFlag from 'vue-country-flag'
import "vue-material-design-icons/styles.css"


Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.component('vue-country-flag', CountryFlag)


const routes = [
  {path: '/works', component: Works},
  {path: '/', component: Home},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});



const i18n = new VueI18n({
  locale: "eu"
});

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});


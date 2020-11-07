import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Login from './pages/Login';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login }
  ]
});

export default router;

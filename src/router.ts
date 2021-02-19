import Vue from 'vue';
import VueRouter, {
  RouteConfig,
} from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [{
  path: '/',
  redirect: { name: 'home' },
}, {
  path: '/home',
  name: 'home',
  component: () => import(
    /* webpackChunkName: 'home' */
    './views/home.vue'
  ),
}];
const router = new VueRouter({ routes });
export default router;

/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import iComponents from '../src/index';

Vue.use(VueRouter);
Vue.use(iComponents);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    routes:[
    {
        path:'/button',
        component: function (resolve) {
            require(['./routers/button.vue'], resolve);
        }
    }
    ]
});

let app = new Vue({
  router,
  render: h => h(App),
}).$mount('#body');


let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});

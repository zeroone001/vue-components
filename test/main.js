/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import iView from '../src/index';
// import locale from '../src/locale/lang/en-US';
// import locale from '../src/locale/lang/zh-CN';

Vue.use(VueRouter);
Vue.use(iView);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    // history: true
    routes:[
    {
        path:'/button',
        component: function (resolve) {
            require(['./routers/button.vue'], resolve);
        }
    }
    ]
});


// router.beforeEach(function () {
//     window.scrollTo(0, 0);
// });

// router.afterEach(function (transition) {

// });

// router.redirect({
//     '*': "/button"
// });
// router.start(App, '#app');
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

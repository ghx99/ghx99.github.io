import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Blog from '../components/BlogHome.vue';
import Bookmark from '../views/Bookmark.vue'
import Frame from '../components/Frame.vue'
// 路由配置
const routers = [
  {
    path: '/',
    name: '框架', // 全局框架
    component: Frame,
    children: [
      {
        path: '/home',
        name: '首页',
        component: Home,
      },
      {
        path: '/about',
        name: '关于我',
        component: About,
      },
      {
        path: '/bookmark',
        name: '收藏',
        component: Bookmark
      }
    ]
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  }
];
// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
})
// 使用全局前置守卫
// router.beforeEach((to, from, next) => {
//   if (!to.name) {
//     next({ name: '首页' }); // 如果没有匹配到的路由，跳转到首页
//   } else {
//     next(); // 继续导航
//   }
// });
export default router;
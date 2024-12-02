<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          class="menu"
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item
            v-for="route in routes"
            :key="route.path"
            :index="route.path"
          >
            {{ route.name }}
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <p>&copy; 2024 高华西 个人博客. 保留所有权利.</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'MyHome',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const routes = [
      { path: '/home', name: '首页' },
      { path: '/about', name: '关于我' },
      { path: '/bookmark', name: '收藏' }
      // 可以继续添加更多路由
    ];
    const handleSelect = (path) => {
      router.push(path); // 路由跳转
    };

    const activeIndex = route.path; // 当前路由路径作为默认激活项

    return {
      routes,
      handleSelect,
      activeIndex,
    };
  },
};
</script>

<style>
@import "element-plus/dist/index.css";
/* 正确引入 Element Plus 的样式 */
</style>
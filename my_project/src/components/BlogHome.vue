<template>
  <div>
    <el-header>
      <h1>个人博客</h1>
      <el-menu
        class="menu"
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          首页
        </el-menu-item>
        <el-menu-item index="2">
          关于我
        </el-menu-item>
        <el-menu-item>
          <el-button @click="goToAbout">
            返回about
          </el-button>
        </el-menu-item>
        <el-menu-item>
          <el-button @click="goToHome">
            返回home
          </el-button>
        </el-menu-item>
        <el-menu-item index="3">
          联系我
        </el-menu-item>
      </el-menu>
      <div>
        <router-view />
      </div>
    </el-header>
    <el-container>
      <el-main>
        <el-card
          v-for="(post, index) in posts"
          :key="index"
          class="post-card"
        >
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
          <el-button type="primary">
            阅读更多...
          </el-button>
        </el-card>
      </el-main>
    </el-container>
    <div>
      <router-view />
    </div>
  </div>
</template>
  
  <script>
import { useRouter } from 'vue-router';
  export default {
    setup () {
    const router = useRouter();

    const goToAbout = () => {
    router.push('/about'); // 路由跳转
    };
    const goToHome = () => {
      router.push('/'); // 路由跳转
    };
    return {
    goToAbout, goToHome
    };
    },
    data() {
      return {
        activeIndex: '1',
        posts: [
          {
            title: '博客文章标题 1',
            content: '这是第一篇博客文章的内容。这里可以写一些关于你的兴趣和经历的文字。',
          },
          {
            title: '博客文章标题 2',
            content: '这是第二篇博客文章的内容。可以分享一些你最近的项目或想法。',
          },
          {
            title: '博客文章标题 3',
            content: '这是第三篇博客文章的内容。可以讨论一些技术主题或个人见解。',
          },
        ],
      };
    }
  };
  </script>
  
  <style>
  .menu {
    margin-bottom: 20px;
  }
  .post-card {
    margin: 20px 0;
  }
  </style>
  
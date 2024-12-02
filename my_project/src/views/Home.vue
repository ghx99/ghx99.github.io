<template>
  <div class="common-layout">
    <el-image
      v-for="url in urls"
      :key="url"
      :src="url"
      lazy
    />
  </div>
</template>

<script>

export default {
  name: 'MyHome',

data() {
    return {
      // 将 urls 数组放入 data 中，确保它能在组件内访问
      urls: [
        require('@/images/test1.png') 
      ]
    };
  }
};
</script>

<style>
@import "element-plus/dist/index.css";  /* 正确引入 Element Plus 的样式 */
</style>

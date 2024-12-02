module.exports = {
  // 指定环境
  env: {
    browser: true, // 浏览器环境
    node: true,    // Node.js 环境
    es2021: true,  // 支持 ES2021 语法
  },
  parserOptions: {
    parser: 'babel-eslint', // 如果你使用 Babel
    ecmaVersion: 2021,      // 解析的 ECMAScript 版本
    sourceType: 'module',   // 使用 ES6 模块
  },
  extends: [
    'plugin:vue/vue3-recommended', // Vue 3 推荐的 ESLint 配置
    'eslint:recommended',          // ESLint 推荐的规则
  ],
  rules: {
    // 在此添加自定义的 ESLint 规则
    'no-console': 'warn',       // 允许使用 console，但会警告
    'no-unused-vars': 'warn',   // 允许未使用的变量，但会警告
    'vue/no-unused-components': 'warn', // 未使用的组件警告
  },
};

const { DefinePlugin } = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        '__VUE_OPTIONS_API__': JSON.stringify(true),  // 如果你在使用 Options API
        '__VUE_PROD_DEVTOOLS__': JSON.stringify(false),  // 在生产中禁用 devtools
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),  // 关闭生产环境中的 hydration mismatch 详细信息
      })
    ]
  }
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  // cors 회피 프록시설정
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:3000'
        // target:process.env.VUE_APP_PROD_BASE_DOMAIN
      }
    }
  }
  
})



# 项目
类型：个人主页
技术选型：vue3(setup) + js
开发：本人独立开发(前端吴彦祖)
博客地址：https://blog.csdn.net/tjq11111

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev

# src项目文件结构
src
#### /assets         资源存放文件位置(图片)
#### /components     公共组件存放位置
#### /pages          页面存放位置，结构一般与页面路径一致
#### /router         vue路由
#### /utils          全局工具(工具函数、自定义指令...)
#### /style/common.css     个人配置的公用css样式，一般类名为css语句的缩写
#### /style/iconfont.css   在线的icon文件
#### /style/style.css      全局的默认样式，与common.css的区别是：style的样式一般为某个标签的初始样式，而common的样式需要我去手动添加类名
#### /main.js        入口文件
#### /App.vue        不做解释


# 组件、效果
本项目所有组件与效果均为手撕，唯一引入的第三方仅有less、vue-router这些固定建站插件；
因此难免会有一些性能上的多余消耗，但本人致力于精益求精，不断优化代码结构



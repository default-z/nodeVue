# nodeVue

1.vue 项目创建  vue create web

2.初始化node项目 
  cd server  
  npm init -y
  
3.server文件夹内添加index.js 并在package.json增加启动命令："serve": "nodemon index.js",
注意这里的nodemon要全局安装 执行命令：npm i -g nodemon


4.cd web 

执行命令：npm add element 安装elementui 
执行命令：npm add router 安装路由，注意路由history mode 选择 n
执行命令：npm i axios 请求接口使用,并封装http.js

5.cd server

执行命令：npm i express@next mongoose cors
mongoose是数据库 cors是允许跨域请求


6.mongoose安装（本地）

7.cd server 安装inflection插件，可以实现CRUD技术（通用增删改查接口），inflection可以将表名复数转成单数并且大写首字母

8.cd server 处理上传图片的中间件，需要安装multer 



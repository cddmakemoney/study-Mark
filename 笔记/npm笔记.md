

去官网装个14版本的`node`，然后下个`nvm`好切换版本：https://github.com/coreybutler/nvm-windows/releases

如果直接用`nvm`安装第一个`node`版本的话，有可能到时候会`npm i`报错

`nvm`选择最新版本的setup的压缩包下载、安装即可

用法：

`nvm ls available`查看可下载的`node`版本

`nvm ls`已安装的版本

`nvm install [版本号]`安装版本

`nvm uninstall [版本号]`删除版本

`nvm use [版本号] ` 切换版本



node：

npm install name -save-dve 简写（npm install name -D） 自动把模块和版本号添加到devdependencies。开发环境中要用到的	

npm install name -save 简写（npm install name -S） 自动把模块和版本号添加到dependencies。生产环境中要用到的



换国内资源链接：
npm config set registry https://registry.npm.taobao.org
检查是否换了：
npm config get registry



清除缓存：npm cache clean --force







开发模式项目启动时指定地址和端口号，注意有些端口号是和浏览器自带冲突的

在`nuxt`项目中：

![image-20220227164536152](README/image-20220227164536152.png)

在`vue`项目中：

![image-20220227164551474](README/image-20220227164551474.png)




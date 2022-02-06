确保安装了node，然后在工作目录下`npm init -y`

然后在目录下本地安装：`npm i webpack webpack-cli --save-dev`

这时我用的不是全局安装webpack，所以直接`webapack`是不行的，要：`npx webpack`

修改源文件保存自动打包：`npx webpack --watch`

# HtmlWebpackPlugin

简化 HTML 文件的创建，安装：`npm install html-webpack-plugin --save-dev `

在`webpack.config.js`的配置：

![image-20220206235654085](README/image-20220206235654085.png)

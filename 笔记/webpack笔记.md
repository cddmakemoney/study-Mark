# 安装

确保安装了node，然后在工作目录下`npm init -y`

然后在目录下本地安装：`npm i webpack webpack-cli -D`

这时我用的不是全局安装webpack，所以直接`webapack`是不行的，要：`npx webpack`

修改源文件保存自动打包：`npx webpack --watch`。这样就不必每次修改代码都要手动`npx webpack`了



**HtmlWebpackPlugin**

作用：简化 HTML 文件的创建，安装：`npm install html-webpack-plugin -D `

在项目根目录创建文件`webpack.config.js`，它的配置：

![image-20220206235654085](README/image-20220206235654085.png)

# 资源模块

作用：引入外部资源并模块化处理（如字体、图片等）

- asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
- asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
- asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
- asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。



重点是type属性，用于指定类型：

![image-20220207001512141](README/image-20220207001512141.png)

# 管理资源

## loader

作用：也是引入外部资源并模块化处理

有两个属性：`test`和`use`

`test`：识别出哪些文件会被转换

`use`：进行转换时，应该使用什么loader

例如：

![image-20220207002657037](README/image-20220207002657037.png)

## 加载CSS

需要`style-loader`和`css-loader`

安装：`npm i style-loader -D`，以后的安装也类似

![image-20220207003839139](README/image-20220207003839139.png)

`style-loader`的作用是在打包后的`html`文件的`head`标签里写入`style`标签并写入样式

但是后面会把CSS样式抽离出来便于管理，所以后面也就用不到`style-loader`了

## 抽离和压缩CSS

作用：在生产环境中节省加载时间

两个插件：

抽离：`mini-css-extract-plugin  `

压缩：`css-minimizer-webpack-plugin`

安装后定义：

![image-20220207004836718](README/image-20220207004836718.png)

抽离出来的样式会以`link`标签形式被加载到打包后的`heml`文件中；还可以设置打包后的样式单独放到一个文件夹中：

![image-20220207004353258](README/image-20220207004353258.png)

![image-20220207004428074](README/image-20220207004428074.png)

`loader`设置：

![image-20220207004510457](README/image-20220207004510457.png)

压缩设置：

![image-20220207004534973](README/image-20220207004534973.png)

## babel-loader

`babel`和`webapck`结合需要`babel-loader`

结合的作用：`webpakck`本身只能做JS模块化的打包，并不支持JS转化，所以为了防止浏览器版本过低，不支持ES6+代码，要使用`babel`：它可以将ES6+转成ES5

要安装三个东西：

`npm i babel-loader @babel/core @babel/preset-env -D`

配置：

![image-20220207011804735](README/image-20220207011804735.png)

还要安装两个插件：

`@babel/runtime`     `babel/plugin-transform-runtime`，也都是`-D`安装

作用：帮助`babel`兼容ES6语法






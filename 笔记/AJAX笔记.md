# AJAX

XMLHttpRequest 是 AJAX 的基础。
XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

为了应对所有的现代浏览器，包括 IE5 和 IE6，请检查浏览器是否支持 XMLHttpRequest 对象。
如果支持，则创建 XMLHttpRequest 对象。如果不支持，则创建 ActiveXObject ：
var xmlhttp;
if (window.XMLHttpRequest)
{
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
}
else
{
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：
open(method,url,async)	规定请求的类型、URL 以及是否异步处理请求。
			method：请求的类型；GET 或 POST
			url：文件在服务器上的位置
			async：true（异步）或 false（同步）

如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。

XMLHttpRequest 对象的三个重要的属性：
onreadystatechange	：存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
readyState		：存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
			0: 请求未初始化
			1: 服务器连接已建立
			2: 请求已接收
			3: 请求处理中
			4: 请求已完成，且响应已就绪
status			：200: "OK"
			   404: 未找到页面

前端代码可以设置：
xhr.timeout=1000;	//设置超时的意思，超时就会触发以下代码
xhr.ontimeout=()=>{
alert('网络繁忙');
}
xhr.onerror=()=>{		//这里断网时会触发
	alert('你的网络似乎有点错误啊');
}

前端取消发送的请求：
const xhr=new XMLHttpRequest();
xhr.abort();

# Express

Express框架开发：
const express =require('express');	//使用express模块
const app=express();		//创建 express对象
app.get('/server',(request,response)=>{		//对/server路径进行路由，PS:名字任取
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('hello ajax');
});
app.listen(8000,()=>{			//8000代表端口，所以在前端代码里面的open方法要对应这个数字，数字是自己取的
    console.log("服务已启动。。8000监听中");
})  
接受方法里面还可以设置延迟：
setTimeout(() => {
        response.send('延迟发送');
    }, 2000);

解决大量重发请求问题，用于减少服务器压力：
设置一个开关变量：
 let issending=false;
        btns[0].onclick=()=>{
            if(issending)x.abort();		//如果是true，表示已经在请求了，直接在前端取消接下来的请求
            x=new XMLHttpRequest();
            issending=true;		//设为正在进行请求
            x.open('GET','http://127.0.0.1:8000/delay');
            x.send();
            x.onreadystatechange=()=>{
                if(x.readyState==4){	//请求已经发送出去了，不需要关心status的值是因为有可能发送的请求本身就注定是失败的，
                    issending=false;		//我前端已经发送出去了就行了，因为前端只管理始终只有一个请求就行了，以免造成压力
                }
            }
           }



JSONP：非官方的跨域解决方案，只支持GET请求，借助script标签完成的跨域

```js
btn.onclick = () =>  {
       axios({
            method: 'get',
            url: 'http://localhost:3000/posts/5',
        }).then(res => {			//这里的res随便命名都可以，因为它只代表返回数据；res.data.title中data是返回数据中的组成部分，title又具体到了这个部分中的这个属性
            let temp=res.data.title;
            result.innerHTML=temp;		//then(	         function(resopse),function(err)	     )第一个返回是的正常的数据，第二个参数是请求失败时返回的数据
        })
    }
```



req.params,req.query是用在get请求当中，而req.body是用在post请求中的
【bodyParser2019年就被弃用了，现在直接express调用：app.use(express.urlencoded({ extended: false }))】
express提供四种解析器
app.use(express.urlencoded({ extended: false }))--解析文本格式
app.use(express.json());--解析JSON格式
app.use(express.raw());--解析二进制格式
app.use(express.text());--解析文本格式

POST请求要在路由配置之前声明urlencoded：app.use(express.urlencoded({ extended: false }))
req.body.属性名name
post请求则会将数据放入http请求包的请求体中，这使得别人无法直接看到用户名和密码！

GET请求则不用声明，直接req.query.属性名name
GET请求会在地址栏url中显示输入的用户名和密码
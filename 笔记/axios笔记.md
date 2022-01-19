# 一个比较流行的AJAX请求库

axios.get(url,config)：

 axios.get('http://127.0.0.1:8000/axios', {
                params: {
                    attack: 100,
                    speed: 200
                },
                headers: {
                    name: 'Tony',
                    age: 23
                }
            })

axios.post(url,data,config)：

 axios.post('http://127.0.0.1:8000/axios', {
                username: 'admin',
                userkind: 'human'
            }, {
                params: {
                    id: 233
                }
            })

Axios函数发送AJAX请求：
axios({				//注意这个参数的顺序不能乱
                method: 'POST',
                url:'/axios',
                params:{
                    defend:500,
                    hp:5000
                },
                headers:{
                    a:123,
                    b:456
                },
                data:{
                    name:'jack',
                    wifename:'rose'
                }
})

# 配合json-server使用



先在HTML文件的目录下打开终端，再输入命令：nodemon 你的JS文件名。
后再JSON文件目录下打开终端，输入监视命令：json-server --watch 你的JSON文件名。
这就既可以监视到服务端的行为与同步JSON文件的更新

以下命令名均大小写可以忽略
这里的GET是是请求
POST是提交，可以在参数中指定好ID，否则就默认将ID设置为JSON文件中ID的最后一个。
然后data:
{
xxx:"xxxx"
}		表示你要提交的信息
PUT是更新，要在URL路径下指定ID，然后设置你要更新的data
DELETE是删除，要在URL路径下指定ID

axios.create(config)
为什么要设计这个语法?
(1) 需求: 项目中有部分接口需要的配置与另一部分接口需要的配置不太一样, 如何处理
(2) 解决: 创建 2 个新 axios, 每个都有自己特有的配置, 分别应用到不同要 求的接口请求中

拦截器：
        axios.interceptors.request.use(config => {
            // Do something before request is sent
            return config;
        }, error => {
            // Do something with request error
            return Promise.reject(error);
        });

        axios.interceptors.response.use(response => {
            // Do something before response is sent
            return response;
        }, error => {
            // Do something with response error
            return Promise.reject(error);
        });


取消请求：
 let cancel = null;
cancelToken: new axios.CancelToken(function (c) {
         //将 c 的值赋值给 cancel
         cancel = c;
}








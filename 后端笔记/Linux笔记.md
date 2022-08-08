**本文Linux采用VM虚拟机安装，版本为centOS 7.9**

# 相关软件及准备

`xshell`和`xftp`必不可少，填个邮箱免费下载使用：https://www.xshell.com/zh/free-for-home-school/

基本的VM下载和安装不用说，百度一堆

检查虚拟机的服务有没有被禁用：

![image-20220805143320435](README/image-20220805143320435.png)

然后是安装centOS:https://blog.csdn.net/qq1808814025/article/details/120154274

注意网络连接

![image-20220801151416947](README/image-20220801151416947.png)



centOS中打开终端：

先输入su，再输入密码以打开root权限

然后修改网卡配置：`vi /etc/sysconfig/network-scripts/ifcfg-ens33`【有可能不是ens33，建议cd到这个路径下看是esc几】

`ONBOOT`改成yes：![image-20220801151558279](README/image-20220801151558279.png)

这是`vim`编辑器，操作方法是按`i`键进入修改模式，按`ESC`退出修改模式；然后直接输入`:wq`即可保存并退出

之后终端输入`service network restart`重启网络就能联网了

（后面某些情况发现联网又失败，见此文章：）

https://blog.csdn.net/sy755754582/article/details/90247098



cd到`/etc/yum.repos.d`目录下`rm -rf *`清空当前目录下的文件，也就是清空原有的yum库，避免后续yum安装冲突

接着更换国内镜像源：`wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo`



安装举例：`yum`安装谷歌浏览器【当然是安装了图形界面的centOS才考虑装，纯命令行的不用；其实作为程序员应该习惯用纯命令行的方式，推荐用xshell来连接Linux使用，因为Linux自带的命令行界面不能随滚轮上下翻页】

这先需要建立repo源，repo是什么？为什么要建立？

可以理解为让系统知道该从什么地址去安装、升级软件，因为不可能你一句`yum install 某某软件`之后系统就知道该从什么镜像地址下载；

centOS 7的自带Base.reop中默认是没有chrome的（就是上述镜像源的`CentOS-Base.repo`），就好比win10系统不可能出厂自带英雄联盟一样，顶多自带个`Edge`浏览器

额外涉及到的知识点：`rpm`是什么？可以理解为多个repo的压缩包，例如某个软件的安装需要多个repo，那么直接下载这个软件的`rpm`包，然后直接安装这个包就得到了repo，举例安装`mysql`：安装后便得到对应的repo

![image-20220808112316545](README/image-20220808112316545.png)

建立repo：

```shell
vim /etc/yum.repos.d/google-chrome.repo
```

然后写入：

```shell
[google-chrome]
name=google-chrome
baseurl=http://dl.google.com/linux/chrome/rpm/stable/$basearch
enabled=1
gpgcheck=1
gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
```

安装：`yum -y install google-chrome-stable --nogpgcheck`，这里可能会提示镜像连接失败等等错误，连续试几次就好



其他小命令：

systemctl  set-default graphical.target   #设置开机默认图形桌面启动 

systemctl  set-default multi-user.target  #设置开机默认命令行启动

```
yum -y update
```

升级所有包同时也升级软件和系统内核

```
yum -y upgrade
```

只升级所有包，不升级软件和系统内核



传说中的删库跑路法：rm -rf /*，也就是从根目录下删除所有文件，最后连系统都不存在了



# 安装项目运行环境

大概总过程:https://blog.csdn.net/hx_76/article/details/123956632

## JDK和maven

https://blog.csdn.net/wang121213145/article/details/124314157

https://www.cnblogs.com/fuzongle/p/12825048.html

注意`vi /etc/profile`的时候，这个JAVA_HOME的路径要设置为如下所示，上述文章的这个路径有误，导致后面安装maven的时候会提示JAVA_HOME不正确

![image-20220803155130859](README/image-20220803155130859.png)

## mysql

https://blog.csdn.net/a774630093/article/details/79270080

其中注意开启3306端口：https://blog.csdn.net/qq_15110681/article/details/125630635

开启外部机器连接权限：GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;

## nginx

https://blog.csdn.net/qq_37345604/article/details/90034424

停止nginx服务：到![image-20220808161333831](README/image-20220808161333831.png)路径下输入`./nginx -s stop`

重载nginx服务：`./nginx -s reload`

# 启动后端

1、用到的数据库系统（mysql）中创建后端用到的数据库

2、上传后端代码直接`java -jar 后端打包文件.jar`（war文件也是同样的命令）

3、数据库导入sql文件

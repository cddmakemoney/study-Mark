# 密码为什么要加密

​	2011 年 12 月 21 日，有人在网络上公开了一个包含 600 万个 CSDN 用户资料的数据库，数据全部为明文储存，包含用户名、密码以及注册邮箱。事件发生后 CSDN 在微博、官方网站等渠道发出了声明，解释说此数据库系 2009 年备份所用，因不明原因泄露，已经向警方报案。后又在官网网站发出了公开道歉信。在接下来的十多天里，金山、网易、京东、当当、新浪等多家公司被卷入到这次事件中。整个事件中最触目惊心的莫过于 CSDN 把用户密码明文存储，**由于很多用户是多个网站共用一个密码，因此一个网站密码泄露就会造成很大的安全隐患**。由于有了这么多前车之鉴，我们现在做系统时，密码都要加密处理。



# 关掉验证

![image-20230301015740356](README/image-20230301015740356.png)

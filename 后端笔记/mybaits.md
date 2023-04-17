# mybatis-plus

使用mp自带的批处理插入时，![image-20230403145049517](README/image-20230403145049517.png)

如果对应的Mapper.xml中有id="insert"的sql时，会报错：

**There is no getter for property named 'list' in 'class com.bootdo.footBallWeb.entity.FootballKellyRate'**

![image-20230403145207717](README/image-20230403145207717.png)

![image-20230403145245898](README/image-20230403145245898.png)

解决办法：给它换个名字即可，例如`insertBatch`
**本笔记只是记载一些个人觉得有必要加以解释说明的知识点**

# Less

Less笔记最好用的其实就是它的官网https://less.bootcss.com/

## 变量

使用@作为变量标识

```
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```



##  @规则嵌套和冒泡

```
.component {
  width: 300px;//这一行开始往父级冒泡，得到【1】
  @media (min-width: 768px) {
    width: 600px;  //这一行开始往父级冒泡，得到【2】
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);//这一行开始往父级冒泡，得到【3】
    }
  }
  @media (min-width: 1280px) {
    width: 800px;//这一行开始往父级冒泡，得到【4】;如果有相同内容将取代父级的内容
  }
}
```

编译为：

```
//【1】
.component {
  width: 300px;
}
//【2】
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
//【3】
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}

//【4】
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```

# Sass

和Less一样要分两步npm安装：sass、sass-loader

而且也是要特定的版本，否则一样会出现版本过高的问题，原因：https://blog.csdn.net/weixin_45821811/article/details/121394553

**sass**和html一样**有严格的缩进风格**，和css编写规范有着很大的出入，是**不使用花括号和分号的**

而scss**需要使用**分号和花括号而不是换行和缩进

```
sass和scss其实是一样的css预处理语言，SCSS 是 Sass 3 引入新的语法，其后缀名是分别为 .sass和.scss两种。
SASS版本3.0之前的后缀名为.sass，而版本3.0之后的后缀名.scss。
```

推荐：<style lang="scss">

## 变量

使用**$**作为变量标识

```
$highlight-color: #F90;
```

用中划线声明的变量可以使用下划线的方式引用：

```
$link-color: blue;
a {
  color: $link_color;
}
```

## 混合器

**作用：减少重复性**

定义这么一句样式，现有明确需求：它会在以后被大量重复使用

```
//rounded-corners是我们给这一段样式自定义的名字
@mixin rounded-corners {
  border-radius: 5px;
}
```

以后想在哪里用，直接 @include [自定义的名字]  就好**（sass的混合比Less要啰嗦，因为Less加个括号就行了）**

```
notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}
```

## 继承

**作用：减少重复性**。

和混合器一个效果

```
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```


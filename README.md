# books-read
用angularjs实现一个图书展示界面

```
运行前先要在cmd加载所需要的插件
    $ npm i 
加载完运行
    $ gulp browser
```
####效果展示(效果为GIF图,网络可能会造成轻微卡顿,重新刷新网页即可)
![效果展示](https://raw.githubusercontent.com/Guanghsy2000/books-read/master/demo.gif)

#### controllers文件夹
```
文件夹用于存放定义的控制器方法
listCtrl.js 列表页,用get请求调取分类数据
bookContent.js 内容,通过在理由传入id属性,获取指定书籍内容的详细信息
```

#### lib文件夹
```
文件夹用于存放需要的插件
css存放着所有的css文件
js 存放着所需要用到js文件
```

#### services文件夹
```
文件夹用于存放所有的api服务文件,方便其他文件调用方法
api_services.js 用来创建服务,进行数据请求
```

#### tpl文件夹
```
视图文件夹
book_content.html  展示单本图书详细内容
book_list.html  展示列表页
home.html 首页信息
```

#### index.hmtl
```
此为入口文件
```

#### main.js
```
路由定义跳转都走这里
```

#### gulpfile.js
```
用于完成后文件压缩整合,目前是调用了自动刷新功能
```

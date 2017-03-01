
// 创建一个服务,进行远程数据请求
app.service('hs',function($http){
    
    /*
        获取图书列表
        参数一:要获取第几页的内容
        参数二:毁掉函数
     */
    this.getList = function(page,callback){
        $http.get(`http://penkuoer.com/api/v1/book/get_books_by_page.json?page=${page}`)
        .then(function(res){
            callback(res.data)
        })
    }

    /**
     * 通过id获取单本图书的内容信息
     * 参数一: 图书id
     * 参数二: 回调函数
     */
    this.getContent = function(id,callback){
        $http.get(`http://penkuoer.com/api/v1/book/get_book_detail.json?id=${id}`)
        .then(function(res){
            callback(res.data)
        })
    }
})

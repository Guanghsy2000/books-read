//获取图书详细内容
//$routeParams 此依赖键用于获取理由传递过来的参数
app.controller('bookContent',['$scope','hs','$routeParams',function($s,hs,$routeParams){
    console.log($routeParams) //路由传递过来的所有内容,是一个对象
    var id = $routeParams.id
    $s.content = ""
    hs.getContent(id,function(res){
        console.log(res)
        $s.content = res.data
    })
}])
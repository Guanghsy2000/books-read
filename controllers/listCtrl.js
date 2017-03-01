//获取图书列表信息

app.controller('listCtrl',['$scope','hs',function($s,hs){
    $s.list = []
    $s.page = 1   //当前页数
    $s.pageSum = null //总页数
    $s.judgePage = true //判断当前页数是否已经超过总页数
    hs.getList($s.page,function(res){
       console.log(res)
        res.data.forEach(function(item){
            $s.list.push(item)
        })
        $s.pageSum = res.total_pages
    })

    //点击更多获取更多数据
    $s.bookListAdd =function(pageSum){
        console.log(pageSum)
        if($s.page < pageSum){
            $s.judgePage = true
            $s.page += 1
            hs.getList($s.page,function(res){
                console.log(res)
                    res.data.forEach(function(item){
                        $s.list.push(item)
                    })
                    $s.pageSum = res.total_pages
            })
        }else{
            $s.judgePage = false
            return          
        }
    }    
}])




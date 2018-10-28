$(function(){
    $("a").click(function(e){
        e.preventDefault()
    })
    //域名查询
    $(".zyw a").click(function(e){         //中/英文域名
        e.preventDefault();
        var $a=$(this)
        $a.addClass("active").siblings(".active").removeClass("active")
    })
    $("label.checked").click(function(){     //域名类型checkbox
        $(this).toggleClass("on")
    })

    var dlen=$(".partner .hzp ul li").length
    var blen=dlen-5
    var dots=$(".partner .dots")
    for(var i=0;i<=blen;i++){           //动态生成索引按钮
        dots.append("<button></button>")
    }
    dots.children().first().addClass("active")  //第一个原点默认激活
    var $btn=$(".partner .dots button")
    $btn.click(function(){
        var btn=$(this) 
        var n=btn.index() 
        var ul=$(".partner .hzp ul")
        ul.css("marginLeft","-237"*n)
        btn.addClass("active").siblings(".active").removeClass("active")
    })
})
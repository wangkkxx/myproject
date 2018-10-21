$(function(){
    //首页轮播
    $(".single-item").slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        useCSS: true
    })
    //域名查询
    var $com=$(".dn-main div.com");
    var $ul=$com.children().first()
    $com.hover(function(){
        $ul.toggleClass("active")
    })

    //一站式服务
    $('[data-toggle="toggle"]').mouseover(function () {
        $(this).addClass("active").siblings(".active").removeClass("active")
    });

    //idc解决方案
    $(".idc1 [data-target]").click(function(){
        var btn=$(this);
        var txt_id=btn.attr("data-target")
        var txt=$(".idc1").find(txt_id)
        txt.addClass("active").siblings(".active").removeClass("active")
        btn.addClass("active").siblings(".active").removeClass("active")
    })

    //合作伙伴
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



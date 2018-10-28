$(function(){
    
    //左边小图标移入时提示
    $(".lb .spec b").hover(function(){
        $(this).next().css("display","block")
    },function(){
        $(this).next().css("display","none")
    })
    //单选框点击事件
    $(".left label").click(function(){
        $(this).addClass("on").siblings(".on").removeClass("on")
    })

    //配置
    /*var $nc=$(".lb2 div.nc")
    $(".lb2 .dy button.he2").click(function(){
        if(!$(this).is(".active")) $nc.replaceWith("<button class='active'>1G</button><button>2G</button><button>4G</button><button>6G</button><button>8G</button><button class='he16'>10G</button>")
    })
    $(".lb2 .dy button.he4").click(function(){
        if(!$(this).is(".active")) $nc.replaceWith("<button class='active'>1G</button><button>2G</button><button>4G</button><button>6G</button><button>8G</button><button class='he16'>10G</button><button>12G</button>")
    })*/

    //按钮点击事件
    $(".left button").click(function(){
        $(this).addClass("active").siblings(".active").removeClass("active")
        var target=$(this).attr("data-target")
        $(target).addClass("show").siblings(".show").removeClass("show")

        if(!$(this).is(".active"))
          $nc.append("<button class='he16'>10G</button>")
    })
    
    //鼠标滑动事件
   
    /*$(".handle").mousemove(function(){
        var range=$(this).parent()
        var width=$(this).offsetParent()
        range.addClass("left",width)
    })*/
})
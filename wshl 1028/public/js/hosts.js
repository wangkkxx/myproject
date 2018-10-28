$(function(){
    $("a").click(function(e){
        e.preventDefault()
    })
    $(".btn").click(function(){
        $(this).addClass("active").siblings(".active").removeClass("active")
    })
    $("a.disabled").click(function(){
        $(this).removeClass("active")
        $(this).siblings().addClass("active")
    })
    $(".dy .btn").click(function(){
        var href=$(this).attr("href")
        $(href).addClass("show").siblings(".show").removeClass("show")
    })
    $(".lb .spec b").hover(function(){
        $(this).next().css("display","block")
    },function(){
        $(this).next().css("display","none")
    })
    $(".left label").click(function(){
        $(this).addClass("on").siblings(".on").removeClass("on")
    })
})

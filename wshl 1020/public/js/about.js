//标签页效果-开始
var tabs=document.querySelectorAll("[data-toggle=tab]");
for(var tab of tabs){
    tab.onclick=function(){
        var tab=this;
        var divs=document.getElementById("after").children;
        for(var div of divs){
            div.style.display="none";
        } 
        var id=tab.getAttribute("data-target");
        var div=document.querySelector(id);
        div.style.display="block";
        //下边框效果
        var on=document.querySelector("#tab>li>a.on"); 
        if(on!=null){
            on.className="";     
            tab.className="on"; 
        }
    }
}
//标签页效果-结束
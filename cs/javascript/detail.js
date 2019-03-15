// 放大镜
var focus = document.querySelector(".focus");
var big_wrap = document.querySelector(".wrap-big-magnifier");
console.log(big_wrap)
var small_wrap = document.querySelector(".wrap-small-magnifier");
var big_bg = big_wrap.children[0];//大图
var small_bg = small_wrap.children[0];//小图
var choice = document.querySelector(".wrap-choice-magnifier").children;
console.log(choice);
//计算比例
// 小图/大图=小图焦点/大图的焦点
var prop = parseInt(getComputedStyle(big_wrap)["width"])/parseInt(getComputedStyle(focus)["width"]);
//大图应该的宽
big_bg.style.width = prop*small_wrap.offsetWidth+"px";
big_bg.style.height = prop*small_wrap.offsetHeight+"px";
console.log(big_bg.style.width,big_bg.style.height);

small_wrap.addEventListener("mouseenter",toggle.bind(false,"show"));
small_wrap.addEventListener("mouseleave",toggle.bind(false,"hide"));
function toggle(type){
    if(type ==="show"){
        display ="block";
    }else{
        display = "none";
    }
    focus.style.display = display;
    big_wrap.style.display=display;
}

small_wrap.addEventListener("mousemove",eleMove);

function eleMove(evt){
    var e =evt || window.event;
    var _left = e.offsetX;
    var _top = e.offsetY;
    _left =_left -focus.offsetWidth/2;
    _top =_top - focus.offsetHeight/2;

    //最小判断
    _left =_left<=0?0:_left;
    _top = _top<=0?0:_top;
    console.log(_left,_top);
    //最大值
    var maxLeft = small_wrap.offsetWidth -focus.offsetWidth;
    var maxTop = small_wrap.offsetHeight-focus.offsetHeight;

    _left=_left>=maxLeft?maxLeft:_left;
    _top = _top>maxTop?maxTop:_top;

    focus.style.left = _left+"px";
    focus.style.top = _top+"px";

    big_bg.style.left = -_left*prop+"px";
    big_bg.style.top = -_top*prop+"px";
}
choice = Array.from(choice);
choice.forEach((item)=>{
    item.addEventListener("click",choeces.bind(false,item));
    // console.log(item);
});
function choeces(item){
    choice.forEach((item)=>{
       
        console.log(item);
        item.className= " ";
    })
    item.className = "active";
    var bigSrc = item.getAttribute("data-big");
   
    var smallSrc = item.getAttribute("data-small");
    
    small_bg.src = smallSrc;
  
    big_bg.src = bigSrc;
}   
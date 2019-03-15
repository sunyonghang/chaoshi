// $.get("./data/json.json",function(res,state,xhr){
//     console.log(res);

//     // $(".list").html(res);
//     // alert(res);
//     // 全局ajax方法，对数据有了更多的操作权限;
//     // console.log(b,c);
// })

 var $container = $(".list")
$.ajax("./data/json.json",{
    type:"get"
})
.then(render)
function render(res){
    console.log(res.list);
    list = res.list;
    var html = template("list-item",{list:list})
    $container.html(html);
}
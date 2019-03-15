var $long = $(".long-nav")

$.ajax("./data/index.json",{
    type:"get"
})
.then(render)
function render(res){
    console.log(res.list);
    list = res.list;
    var html = template("list-item",{list:list})
    $long.html(html);
}
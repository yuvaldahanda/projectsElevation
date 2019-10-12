$(".item").on("click",function(){

    if($(this).data().instock)
    $("body").append("<div class ='box'>"+$(this).text()+"</div>")

})




$("body").on("click",".box",function(){
$(this).remove()

})
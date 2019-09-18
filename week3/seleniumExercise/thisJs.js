$("button").on("click",function(){
    let str=$("input").val()
    $("body").append('<div id="newbox">'+str+'</div>')  
    $("div").css("color","purple")
})

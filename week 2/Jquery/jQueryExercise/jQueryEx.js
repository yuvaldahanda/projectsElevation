// // // //===================================================
// // // //                   ex1
// // // //===================================================


// // // $("body").append("<ul class='box'></ul>")
// // // $("body").append("<input></input>")
// // // $("body").append("<button>button</button>")


// // // $("button").click(function () {
// // //     $(".box").append("<li class='liEx'>" + $("input").val() + "</li>")
// // // })



// // // //===================================================
// // // //                   ex2
// // // //===================================================


// // // $(".box").on("click",".liEx",function (){

// // // $(this).remove(".liEx")

// // // })


// // // //===================================================
// // // //                   ex3
// // // //===================================================

//Exercise 3
$("body").append("<div id=div1 class=box></div>")
$("body").append("<div id=div2 class=box></div>")
let flag = true
// ​
$("div").on("mouseenter",function () {

    if (flag) {
        $("#div1").css("background-color", "red")
        $("#div2").css("background-color", "green")
        flag = false

    }
    else {
        $("#div1").css("background-color", "green")
        $("#div2").css("background-color", "red")
        flag = true


    }
})
$("div").mouseout(function() {
    $("div").css("background-color", "purple") ;
  });

// // // ===================================================
// // //                   ex4 and the last extension
// // // ===================================================

// let counterA = 0
// let counterB = 0
// let array=[]
// $('.item').each(function(){
//     var id = $(this).text();
//     array.push(id);
// });
// $(".item").on("click", function () {

    
//     if ($(this).data().instock && $(this).text()==first) {
//         $("#cart").text($(this).text() + " X" + (++counterA))
//     }
//     else {
//         $("#cart").text($(this).text() + " XX" + (++counterB))
//     }
// })
// $("#cart").on("click", ".cart-item", function () {

//     $(this).remove(".cart-item") //why (this) not working
// })


// // // //===================================================
// // // //                   ex5
// // // //===================================================

// // // const fruits = [
// // //     { name: "Orange", color: "orange" },
// // //     { name: "Banana", color: "yellow" },
// // //     { name: "Coconut", color: "brown" },
// // //     { name: "Kiwi", color: "brown" },
// // //     { name: "Lemon", color: "yellow" },
// // //     { name: "Cucumber", color: "green" },
// // //     { name: "Persimmon", color: "orange" },
// // //     { name: "Pumpkin", color: "orange" }
// // // ]


// // // for (let i in fruits) {

// // //     $("#basket").append("<div class=" + fruits[i].name + ">" + fruits[i].color + "</div>")
// // //     $("." + fruits[i].name).css("color", fruits[i].color)

// // // }


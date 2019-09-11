// console.log($("h1"))
// const sayHi = function(){
//     console.log("Hi!")
//   }
  
//   const $f = sayHi
  
//   $f() //prints "Hi!"
  


// {/* <h1>Hello, change me to blue please!</h1>

// <div class="red-div">Please turn me red!</div>

// <ul><li>Turn this li to green!</li><li>Turn this li to pink!</li>
// </ul>
  
// <div id="brown-div">Turn me brown!</div> */}



//   $("h4")
//   $("h4").css("color", "red")
//   $("h1").css("color", "green")
//   $(".red-div").css("color", "red")
//   $("#first").css("color", "green")
//   $("#second").css("color", "pink")
  
  
  
//     let box=$("#b1")
//     let box2=$("#b2")
//     box.addClass("box")



//     console.log($('#my-input').val())
    
//     $('#my-input').val("terrabut")

//     const color = $("#color").data().color  
//     console.log(color) //prints #2980b9


//     const barCode = $("#gettingdata").data().barcode  
//     const expirationDate=$("#gettingdata").data().expirationdate
//     console.log("item with barcode "+barCode+" will expire on "+expirationDate)


//     const clickTheButton=()=>alert($("#my-input1").val())
//     $("button").click(clickTheButton)

// $(".box").hover(function(){
//   $(this).css("background-color", "blue")
// })


// const aDynamicDiv = "<div class='box'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)
// $("body").append(elem)
// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')


// $(".feedme").on("click", function(){
//   let str=$(".feedme").text()
//   console.log(str)
//   let divCopy = $("<div class='feedme'>"+str+"</div>")//use template literals and $(this)
  
//   $("body").append(divCopy)
// })


// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// for(let name of names){
//   $("body").append(`<div>${name}</div>`)
// }

// const names = [
//   { first: "Alex", last: "Johnson" },
//   { first: "Byron", last: "Loveall" },
//   { first: "Cassandra", last: "Wuthers" },
//   { first: "Deandre", last: "Rahm" },
//   { first: "Ellena", last: "Freeman" }
// ]



// for(let name of names){
//   $("body").append(`<div class='delete'>${name.first+" "+name.last}</div>`)

 
// }

// $(".delete").hover(function(){
//   $(this).remove()
// })



// const addDiv = function() {
//   $("body").append("<div class=box>ssdsd</div>");
// };

// $("button").on("click", function() {
//   addDiv();
// });

// $("body").on("click", ".box", function() {
//   alert("hi");
// });




// $("button").click =() => alert("ee")

// $("button").on("click", function() {
//   $("#blogs").append($("<div class='blog'>vuvu</div>")) 
// })

// $("#blogs").on("click", ".blog", function() {

//   $(this).text("blblblbl")
// })
// // const first = function () {
// //     setTimeout(function () {
// //         console.log("should be first")
// //     }, 3000)
// // }

// // const second = function () {
// //     console.log("should be second")
// // }



// // first()
// // second()


// // const first = function (callback) { //receive the function as a parameter
// //     setTimeout(function () {
// //         console.log("should be first")
// //         callback() //this is the `second` function being invoked
// //     }, 3000)
// // }

// // const second = function () {
// //     console.log("should be second")
// // }

// // first(second) //pass the second function to the first, as an argument

// let users = []

// const getData = function (displayData) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         displayData()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)


// const doSomething = function(){
//     console.log("something")
//   }
// setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds

  


// //arrow function



// const square = (number) => {
//     console.log(Math.pow(number,2))
// } 
// square(4)

// // =============================== exercise =======================================
// const getFormalTitle = (title,name)=> title+" "+name


// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche

// //===================================================================================

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout( () => { console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()





//===================================exercise 1===============================================

// const pushPull = (func) =>func()



// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
  
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"
  
// //===================================exercise 2===============================================

// const getTime = (func) => func(new Date())

// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
  
//   getTime(returnTime)
  
//===================================exercise 3===============================================

// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
  
// const logData = function(data){
//     console.log(data)
// }

//   displayData(alert, logData, "I like to party")
  //===================================exercise 4===============================================
  
//   const sum = (num1,num2,num3) => num1+num2+num3 

//   console.log(sum(1,2,3))

    //===================================exercise 5===============================================

//     const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()



// console.log(capitalize("bOb") ) // returns Bob
// console.log(capitalize("TAYLOR")) // returns Taylor
// console.log(capitalize("feliSHIA")) // returns Felishia

    //===================================exercise 6===============================================

//     const determineWeather = temp => {
//         if(temp > 25){
//           return "hot"
//         }
//         return "cold"
//       }

//     const commentOnWeather = temp => determineWeather(temp)

//       console.log(commentOnWeather(30)) //returns "It's hot"
//       console.log(commentOnWeather(22)) //returns "It's cold"
            
//  //===================================exercise 7===============================================

//  const explode = (lightFunc,soundFunc,sound) => {
//     lightFunc()
//     soundFunc(sound)

//  }
// const shineLight = () => {
//     document.getElementById("box").style.width="100px"
//     document.getElementById("box").style.height="100px"
//     document.getElementById("box").style.background="yellow"

// }
// const makeSound = (sound) => alert(sound)

// explode(shineLight,makeSound,"boom")


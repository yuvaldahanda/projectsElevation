// console.log("Hello, world!")
// console.log( ( (4 + 5) > 10) && !("a" == "b")) 
// console.log( ("a" == "b"))// we'll see what all this means soon
// let startPosition
// let newPosition = (startPosition || 0) + 10

// console.log(startPosition || 0) //prints 10
// const myVariable = "The potential of the future " // notice the space we're leaving at the end

// console.log(myVariable+ "is the best thing ever")

//  // logs "The potential of the future is the best thing ever"
// let password=123
// let confirmpassword=123
//  console.log(password==confirmpassword)


//  if(false){
//     console.log("This will never see the light of day")
//   }
  

//   if("test" == "test"){
//     console.log("Hello?")
//   }
  
//   if(true){
//     console.log("Hello?")
//   }
//   const name = "Elizabeth"
// if(name == "Queen"){
//   console.log("All hail!")
// }
// let age = 15
// const minimumAge = 16

// if(age >= minimumAge){
//   console.log("Come in, beer's on the house!")
// }
// else{
//   console.log("I'm calling the police. You have two minutes to leave.")
// }
// let username = "serious_cat612"
// const correctUsername = "serious_dog612"

// if(username){
//   if(username == correctUsername){
//     // let user in
//   }
//   else{
//     console.log("Hey dog, that's the wrong username")
//   }
// }
// else{
//   alert("You must enter your username")
// }
// // let numChildren = prompt("please enter the numbner of the children")
// // let isCarful = true
// // isCarful=false
// // if(!isCarful)
// // {
//     // numChildren++;
// // } 
// // console.log(numChildren)


// let silverwareCount=prompt("please eneter some number")

// if(silverwareCount%2==0)
// {
//     console.log("its even number")
// }
// else
// {
//     console.log("its odd number")
// }
// let performance = "stellar"
// let salary = 10000
// const goodBonus = 1000
// const stellarBonus = 3000

// if(performance == "stellar")
// {
//     salary+=stellarBonus
    
// }
// else
// {
//     salary+=goodBonus
// }

// const isVIP = false
// let cash = 500


// if(!isVIP)
// {
//     console.log("sorry you need to pay you have more then 300?")
//      if(cash>300)
//     {
//         console.log("you need to pay 500")
        
//     }
// }
// const gender = null
// let profession = "business"

// if(gender =="male")
// {
//     profession+="man"
// }
// else if(gender== "female")
// {
//     profession+="woman"
// }
// else{
// console.log("no gender");

// }











// let boughtTesla = true
// const yearOfTeslaPurchase = 2014
// let isUSCitizen = true
// let currentYear = 2018

// const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
// plants[2]="yuvl"
// console.log(JSON.stringify(plants))

// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
// let crud=[]
// let temp
// crud=genes
// crud[1]=crud[0]
// temp=crud[4]=temp

// let person = {
//     name: "Mariah",
//     occupation: "Gangster"
//   }
//   console.log(person.occupation) // prints "Gangster"


//   const bag = {
//     weight: 10,
//     owner: "Larissa",
//  //   items: ["Pen", "Bottle", "Book"]
//   }
//   console.log(bag.items) // prints ["Pen", "Bottle", "Book"]
  


// let car = {

//     color : "white",
//     numWheel : 5,
//     isfacy : true

// }
// if(car.isfacy)
// {
//     console.log("The brown car has four wheels. It is fancy")
// }


// let stuff= {

//     item:"bottle",
//     toBeginnig: true,
//     items :["Pen", "Bottle", "Book"]


// }

// if(stuff.toBeginnig)
// {
//     stuff.items.unshift("pen","pes2")

// }
// else
// {
//     stuff.items.push(item)
// }
// console.log(stuff.items)
// const human = {
//     age: 0
// }

// const babyNameKey = "name"
// const babyNameValue = "Goojibear"
// const babyNameValue1 = "Goojibear1"
// human[babyNameKey] = babyNameValue


// console.log(human)

// human["name"]="bubu"
// console.log(human)

// let apple = {
//     color: "red",
//     name: "apple"
//   }
  
//   let cheese = {
//     color: "yellow",
//     name: "cheese"
//   }
  
//   let foods = [apple, cheese]
  
//   console.log(foods[0].name) // apple
//   console.log(foods[1].color) // yellow
//   const bag = {
//     weight: 10,
//     owner: "Larissa",
//     items: [                   // an array with objects in it!
//       {item: "Pen", count: 2},
//       {item: "Bottle", count: 1},
//       {item: "Book", count: 3}
//     ]
//   }
//   console.log(bag.items[0]["item"]);
    






// ex object
// let p1 =
// {
//     name:"yuval",
//     age:"25",
//     city:"mazkeret batya"
// }
// let p2 =
// {
//     name:"ELDAD",
//     age:"25",
//     city:"RISHON"
// }
// if(p1.age==p2.age)
// {
//     console.log("your the same age")
// }
// else if(p1.city==p2.city){
//     console.log("Jill wanted to date Robert")
// }
// else{
//     console.log("Jill wanted to date Robert, but couldn't")

// }


//ex object 2


// let p1 =
// {
//     name:"1",
//     age:"25",
//     city:"mazkeret batya"
// }
// let p2 =
// {
//     name:"2",
//     age:"25",
//     city:"RISHON"
// }
// let p3 =
// {
//     name:"3",
//     age:"25",
//     city:"RISHON"
// }
// let p4 =
// {
//     name:"4",
//     age:"25",
//     city:"RISHON"
// }
// let myList=[p1,p2]
// myList[0].age=""
// myList[0].city=""


// myList.splice(1,1)
// let mySecondList=[p3,p4]
// myList.push(mySecondList)
// console.log(myList)



// let libary=
// {

//     books:[{title:"hary potter",author:"yuval"}]


// }

// myList.push(libary)
// console.log(myList)





const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
function reservationsfunc(){

let name=document.getElementById("reservations1").value
if(name=="ted")
{
    document.getElementById("example").innerHTML ="sorry " + name;

 }
// else
// {
//     console.log("worng reservation")
//     reservations[name]={claimed:true}
//     console.log(reservations)
// }

//   let array=Object.keys(reservations)

//   if(name==array[0] && !reservations.Bob.claimed)
//   {
//       console.log("welcome " + array[0])
//   }
//   else if(name==array[0]&&reservations.Bob.claimed)
//   {

//     console.log("reservation ok and its not claimed")

//   }
// else{
// console.log("not claimed and not reservation")
// }
  }
// let car = {wheels: 4}

// car['color']='blue'
// console.log(car)


// let x = [ {human: {name: 'Daena', age: 31} } ][0].age
// console.log(x)
// function myFunction(p1, p2) {
//   return p1 * p2;   // The function returns the product of p1 and p2
// }
// let companies =[myFunction(9,2),"ness2"]






// for(let company of companies){
//   console.log(company)
// }


// for(let i = 80; i < 100; i+=2){
//   console.log(i)
// }


// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// //let age = [1,2,3]
// let name = ["yuval","eldad","alex"] 
// for(let index in age){
//   console.log(age[index]+" and his name is "+name[index])
// }




// let age = [1,2,3]
// let sum=0
// for(let runindex of age){
//   sum+=runindex
// }
// console.log(sum)



// ex 3 array

// let age = [1,2,3]
// let sum=0
// for(let runindex of age){
//   sum+=runindex
// }
// sum=sum/age.length
// console.log(sum)


// let nums=[]

// for(i=0;nums.length<100;i++)
// {
//   nums.push(i)
// }
// console.log(nums)

// for(let runvalue of nums)
// {
//   if(runvalue % 2 != 0)
//   {
//     console.log(runvalue)
//   }
// }


// ex 7
// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []


// for(let i=0;i<names.length;i++)
// {

//   people.name=names[i]
//   people.age=ages[i]
// }
// console.log(people)

// for(let i=0;i<names.length-1;i++)
// {
// console.log(names[i]+"is age"+ages[i])
// }
// //  ex 9
// const posts = [
//   {id: 1, text: "Love this product"},
//   {id: 2, text: "This is the worst. DON'T BUY!"},
//   {id: 3, text: "So glad I found this. Bought four already!"}
// ]

// for(let runindex in posts)
// {
//   if(posts[runindex].id==2)
//   {
//     posts.splice(runindex,1)
//   }
// }
// console.log(posts)

// const posts = [
//   {
//     id: 1, 
//     text: "Love this product",
//     comments: []},
//   { 
//     id: 2, 
//     text: "This is the worst. DON'T BUY!", 
//     comments: [{id: 1, text: "Idiot has no idea"}, {id: 2, text: "Fool!"}, {id: 3, text: "I agree!"}]
//   },
//   {
//     id: 3, 
//     text: "So glad I found this. Bought four already!",
//     comments: []}
// ]

// for(let i in posts)
// {
//   for(let j in posts[i].comments)
//     if(posts[i].comments[j].id==3)
//         posts[i].comments.splice(j,1)
// }
// console.log(posts)



// const greet = function(name){
//   console.log("Hello, " + name)
// }

// const growOld = function(user){
//   user.age++
// }


// greet() // prints "Hello, undefined"
// growOld() // throws an error
// const example = function(){
//   while(true){
//     console.log("hey")
//     return
//   }
// }
// example()
// const add = function(x, y){
//   const sum = x + y
//   console.log("Returned " + sum)
//   return sum
  
// }

// add(1, 2)



//ex 1 function
// function calcAge(currentYear,bornYear)
// {

// return currentYear-bornYear

// }
// const age = calcAge(2017, 1989)
// console.log(age)



// //ex 2 function

// function calcAge(currentYear,bornYear)
// {

// return currentYear-bornYear

// }
// const age = calcAge(2017, 1989)
// console.log("You are either "+(age-1)+" or "+ age )


//ex3 function
// function isEven(num)
// {

// if(num%2==0){
//   return true
// }

// return false

// }
// console.log(isEven(2))

// //ex4 function
// function oddNumber(num)
// {
// const temp =[]
// for(let value of num)
// if(value%2!=0)
// {
//   temp.push(value)
// }
// return temp
// }

// const array = [1,2,3,4,5,4]
//console.log(oddNumber(array))


// //ex5 function
// function checkIfExist(array,num)
// {

// for(let value in array)
//   if (value==num)
//   {
//     return true
//   }



// }

// const array = [1,2,3,4,5,4]
// const num=3
// console.log(checkIfExist(array,num))


//ex 6 function

// const calculator ={

//   add:function add(num1,num2){
//     let sum=num1+num2
//      return sum },
//   subtract:function subtract(num1,num2)
//   {
//     let sum=num1-num2
//     return sum 

//   }

// }

// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //should print 42


//ex7 function

// function increaseByNameLength(money,name)
// {
//  let moneyNameLength=name.length +money
//  return moneyNameLength
// }
// function makeRegal(name)
// {
// return name.toUpperCase();

// }



// const turnToKing = function(name, money){
//   name = name.toUpperCase()
//   money = increaseByNameLength(money, name)
//   name = makeRegal(name)

//   console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


// const bag = ["flashlight", "medicine"]
// const moreItems = ["tent", "water bottle", "knife", "rope"]

// if(bag.length < 3){
//   const nextItem = moreItems[0]
//   bag.push(nextItem)
// }

// console.log(bag)
// console.log("Added " + nextItem)

//===================================================================================
// //Section 1
// //===================================================================================
// const run = true

// if (run) {
//     let distance = 8
//     for (var i = 0; i < distance; i++) {
//             console.log("running")
//         }
//     console.log("Finished running " + distance + " miles") //this is ok
//     }
    
//     console.log("Damn, you see this gal? She ran " + distance + " miles")//not defined
//     //
//     //===================================================================================//Section 2//===================================================================================
// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound)//eror not defined
// }

// //===================================================================================
// //Section 3
// //===================================================================================
// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)//ok

// //===================================================================================
// //Section 4
// //===================================================================================
// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()//error undefined

// //===================================================================================
// //Section 5
// //===================================================================================
// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         }
//     }
//     return found//undefind
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }

// //===================================================================================
// //Section 6
// //===================================================================================
// let isEnough = false

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     }
// }

// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")//this is print

// }
// else {
//     console.log("Here we go again...")
// }

// const cat = {
//     makeNoise: function () {
//       alert(this.noise);
//     },
//     noise: "Meow!"
//   };
  
//   const dog = {
//     makeNoise: cat.makeNoise,
//     noise: "Woof!"
//   };
  
//   cat.makeNoise();
//   dog.makeNoise();
  




// const person = {
//     hungry: true,
  
//     feed: function () {
//         let yummi=this.hungry
//       if (yummi) {
//         yummi = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }
  
//   person.feed() //should alert "I'm no longer hungry"
  



// const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + this.amount + ' liters in ' + this.name);
//   };
  
//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };
  
//   garage.car1.fillTank(2)
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
//  garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);
   


// const pumpFuel = function (plane) {
//   plane.fuel += 1;
// };

// const airplane = {

//   fuel:0,
//   fly: function () {
//     if (this.fuel < 2) {
//       return 'on the ground!';
//     }
//     else {
//       return 'flying!';
//     }
//   }
// };

// console.log('The plane should not be able to fly (yet): ' + airplane.fly());

// pumpFuel(airplane);
// console.log('The plane should STILL not be able to fly: ' + airplane.fly());

// pumpFuel(airplane);
// console.log('Take off! ' + airplane.fly());

// const stealCoins = function(num)
// {

// return (this.coinCount-num)


// }

// const tipJar = {
//   coinCount: 20,
//   tip: function () {
//     this.coinCount += 1;

//   },

//   stealCoins: function()
//   {
   
//     this.coinCount=this.coinCount-num


//   }
// };

// tipJar.tip();
// console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(3);
// console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

// const revealSecret = function () {
//   return secret;
// };

// const shoutIt = function (person, func) {
//   person.revealItAll = func;
//   const result = person.revealItAll();
//   alert(person.name + " said: " + result);
// };

// const avi = {
//   name: "Avi",
//   secret: "Im scared of snakes!"
// };

// const narkis = {
//   name: "Narkis",
//   secret: "I dont have secrets because I'm zen like that."
// };

// shoutIt(avi, revealSecret);
// shoutIt(narkis, revealSecret);

// const coffeeShop = {
  

//   arrayofkeys: function(){
//   return  Object.keys(this.drinkRequirements)
//   },



//   beans: 40,

//   drinkRequirements: {
//     latte: 10,
//     americano: 5,
//     doubleShot: 15,
//     frenchPress: 12
//   },

//   buyBean:function (numBean)
//   {

    


//   },

// }

// console.log(coffeeShop.arrayofkeys());

// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"


//ex thisjs
// const beansCost=300
// const coffeeShop = {
//   beans: 40,
//   money:1000,
  

//   drinkRequirements: {
//     latte:      {beanRequirement: 10, price: 5},
//     americano:  {beanRequirement: 15, price: 10},
//     doubleShot: {beanRequirement: 4, price: 20},
//     frenchPress:{beanRequirement: 10, price: 5}
//   },

//   makeDrink: function (drinkType) {
//     // TODO: Finish this method

//     if(drinkType in this.drinkRequirements )
//     {
//         if(this.drinkRequirements[drinkType].beanRequirement<this.beans){
//             this.beans=this.beans-this.drinkRequirements[drinkType].beanRequirement
//         }
        
//         else{
//             alert("Sorry, we're all out of beans!")
//         }
//     }
//     else{
//       alert("Sorry, we don't make "+drinkType)
//     }
//   },

//   buyBeans:function (numBeans){
//     this.beans-=numBeans
//     this.money-=beansCost


//   },
//   buyDrink:function (drinkType){
//     this.money+=this.drinkRequirements[drinkType].beanRequirement
//     this.makeDrink(drinkType)



//   }
// }
// //coffeeShop.buyBeans(prompt("please enter the number of bean you want tp buy"))
// coffeeShop.buyDrink("latte"); 
// // coffeeShop.makeDrink("americano");
// // coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// // coffeeShop.makeDrink("doubleShot");
// // coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"


// const story = "In In In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
// const specialChars = [",", ".", "'", '"',"?", "!", ";"]
// const wordCounts = {}
// let strKey,strValue=0
// let count=0,i
// let array=story.split(" ")

// const findRepeatWord =function ()
// {
// for(i=0 ; i<array.length;i++){
//     for(j=0 ; j<array.length;j++)
//     {
//       if(array[i]==array[j])
//         strValue++
//     }
//     wordCounts[array[i]]=strValue
//     strValue=0
    
// }
// console.log(wordCounts)
// }


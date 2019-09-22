// // // const someModule = function(){

// // //     const _somethingPrivate = 3
// // //     const exposePrivates = () => _somethingPrivate
  
// // //     return {exposePrivates : exposePrivates()}
    
// // //   }
// // //   const m = someModule()
// // //   console.log(m.exposePrivates) //prints 3
    


// // class Animal {
// //     constructor(name, numLegs) {
// //         this.name = name
// //         this.numLegs = numLegs
// //     }
// // }
// // const cat = new Animal("Puss", 4)
// // console.log(cat.name + " has " + cat.numLegs + " legs") //prints "Puss has 4 legs"


// // class Human {

// //     constructor(name,age,isFriendly){
// //         this.name=name
// //         this.age=age
// //         this.isFriendly=isFriendly
// //     }


// // }
// // const human =new Human("yuval","12",true)
// // console.log(human)





// // class Animal {
// //     constructor(name, numLegs) {
// //         this.name = name
// //         this.numLegs = numLegs
// //     }

// //     giveBirth(name){
// //         console.log("Boom. Birthed " + name)
// //     }
// // }


// // const cat = new Animal("Puss", 4)
// // cat.giveBirth("Dolly") // prints "Boom. Birthed Dolly"

// // class Vehicle{
// //     constructor (x, y, speed) {
// //         this.x = x;
// //         this.y = y;
// //         this.speed = speed;
// //         Vehicle.carsSold++;
// //    }

// //       static getInfo() {
// //         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    
    
// //    }
// // }
// // Vehicle.carsSold = 0
// // Vehicle.getInfo()
// // let vehicle = new Vehicle(1,2,4)
// // let vehicle1 = new Vehicle(1,2,4)
// // Vehicle.getInfo()





// // class Animal {
// //     constructor(name, numLegs) {
// //         this.name = name
// //         this.numLegs = numLegs
// //     }

// //     giveBirth(name){
// //         console.log("Boom. Birthed " + name)
// //     }
// // }


// // const cat = new Animal("Puss", 4)
// // cat.giveBirth("Dolly") // prints "Boom. Birthed Dolly"

// // class Vehicle{
// //     constructor (x, y, speed) {
// //         this.x = x;
// //         this.y = y;
// //         this.speed = speed;
// //         Vehicle.carsSold++;
// //    }

// //       static getInfo() {
// //         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    
    
// //    }
// // }
// // Vehicle.carsSold = 0
// // Vehicle.getInfo()
// // let vehicle = new Vehicle(1,2,4)
// // let vehicle1 = new Vehicle(1,2,4)
// // Vehicle.getInfo()





// class Vehicle{
//     constructor (x, y, speed) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         Vehicle.carsSold+=30000;
//    }

//       static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    
    
//    }
// }
// Vehicle.carsSold = 0
// Vehicle.getInfo()
// let vehicle = new Vehicle(1,2,4)
// let vehicle1 = new Vehicle(1,2,4)
// let vehicle21 = new Vehicle(1,2,4)
// Vehicle.getInfo()




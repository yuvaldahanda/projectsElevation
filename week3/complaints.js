const passingVariable = require('./consts')
const handleComplaint= require('./complaintsHandler')

let complaint1 = {
    text: "I'm not getting enough money",
    type: passingVariable.FINANCE//use the FINANCE type from the consts module
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: passingVariable.FINANCE//use the FINANCE type from the consts module
}

let complaint3 = {
    text: "I'm always full of energy",
    type: passingVariable.WEATHER//use the EMOTIONS type from the consts module
}



console.log(handleComplaint(complaint1)) //should print "Money doesn't grow on trees, you know."
 console.log(handleComplaint(complaint2)) //should print "Money doesn't grow on trees, you know."
console.log(handleComplaint(complaint3)) //should print "It'll pass, as all things do, with time."

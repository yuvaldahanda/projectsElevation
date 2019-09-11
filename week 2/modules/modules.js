// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }

// return {
//     add: add,
//     sub: subtract,
//     mult: multiply,
//     div: divide
// }
// }


// const m=mathOperations()
// console.log(m.add(1,2))
// console.log(m.add(13,29))
// console.log(m.mult(1.75,24))
// console.log(m.mult(7,m.div(36,6)))


// ============================================================================================
// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('yuval')
// usersModule.addUser('eldad')
// usersModule.listUsers()

// =================================ex 1=======================================



// const StringFormatter =function (){



//     const capitalizeFirst =function (str){

//         return str.charAt(0).toUpperCase() + str.slice(1)
        
//     }
    
//     const skewerCase =function (str){

//         return str.replace(" ", "-");

//     }

//     return{
//         capitalizeFirst:capitalizeFirst,
//         skewerCase:skewerCase

//     }


// }

// const formatter = StringFormatter()

// console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
// console.log(formatter.skewerCase("blue box")) //should print blue-box

// =================================ex 2=======================================


// const Bank = function() {

//     let _money=500

//     const depositeCash =function(cash)
//     {
//         _money+=cash
//     }
//     const checkBalance =function()
//     {
//         console.log(_money)
//     }

// return{
//     deposit:depositeCash,
//     showBalance:checkBalance

// }


// }
// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950

// =================================ex 3=======================================



const SongsManager= function()
{
    const songs = {}

    const addSong = function (id,url){
        let arr= url.split("=")
        url=arr[1]
        songs[id]=url
        return songs
    }

    const getSong =function(url)
    {
        return url

    }

return{
    addSong:addSong,
    getSong:getSong

}    

}

const songsManager = SongsManager()
console.log(songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ"))
// console.log(songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U"))
// console.log(songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8"))

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ


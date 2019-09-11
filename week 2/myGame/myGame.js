
// let Cards =[]

// const getRandomColor = function() {
//     const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c","#2c3e50", "#7f8c8d"]
    
//     const randomPosition = Math.floor(Math.random() * niceColors.length);
//     return niceColors;
//   }
//   // let box=document.createElement("div")
  
  
//   const createCards = function(num){
//    for(let i=0;i<num;i++){
//         Cards[i]=document.createElement("div")
//         Cards[i].setAttribute("class","box")
//         Cards[i].setAttribute("id","box"+i)
//         Cards[i].style.width="100px"
//         Cards[i].style.height="100px"
//         Cards[i].style.display="inline-block"
//         Cards[i].style.position="relativ"
//         Cards[i].style.marginLeft="4px"
//         Cards[i].style.background="yellow"
//         document.body.appendChild(Cards[i])
       
//    }
//   }
   
  
//   const setColorOnClick = function ()
//   { 
//     let arr=getRandomColor()  
//     let randomNum=Math.floor(Math.random() * Cards.length)
    
//     for(let i in Cards)
//     {
//         Cards[i].onclick = function() {
//             Cards[i].style.background=arr[i]
//             Cards[randomNum].style.background=arr[i]

//         }
        

        
//     }

//   }
  
  
//   const main =function(){
//     let numOfCards=10
//     createCards(numOfCards)
//     setColorOnClick()

//   }
  
//   main()
  
       
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Used like so
  var arr = [2, 11, 37, 42];
  arr = shuffle(arr);
  console.log(arr);
  
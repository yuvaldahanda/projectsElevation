





const getRandomColor = function() {
  const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
  
  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
}
// let box=document.createElement("div")




const createBoxes = function(num){
 for(let i=0;i<num;i++){
      let box=document.createElement("div")
      box.setAttribute("class","box")
      box.setAttribute("id","box"+i)
      box.style.width="100px"
      box.style.height="100px"
      box.style.display="inline-block"
      box.style.marginLeft="4px"
      box.style.background="yellow"
      document.body.appendChild(box)
     
 }
}


function onMouse()
{
  this.style.background="red"
}



const overFunc = function (numOfBoxes)
{ let str="box"
  for(let i=0;i<numOfBoxes;i++)
  {
    document.getElementById(str+i).onmouseover =()=> {onMouse()}
    //document.getElementById(str+i).onmouseout =()=> {document.getElementById(str+i).style.background=getRandomColor()}
  }
}


const main =function(){
  let numOfBoxes=7
  createBoxes(numOfBoxes)
  overFunc(numOfBoxes)
}

main()

     


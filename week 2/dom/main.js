// console.log(document)
// document.getElementById("playing-field").style.backgroundColor = "blue"
// const playingField = document.getElementById("playing-field")
// console.log(playingField)
// const down = document.getElementById("down")
// console.log(down)
// console.log(down.innerHTML)
// playingField.style.backgroundColor = "green"
// playingField.style.backgroundColor = "green"
// const block = document.getElementById("block")
// block.style.backgroundColor="white"


// // =============== set attribute to html document ==========================
// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// document.body.appendChild(header)
// header.setAttribute("class", "my-header")
// const header2 = document.createElement("h2")
// header.innerHTML = "Yuvaldahan"
// header2.setAttribute("class","my-header")
// console.log(header2)

// =============== move the circle element iside the box ==========================

// const block = document.getElementById("block")


const moveRight = function(){
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left += 10
    block.style.left = left + "px"
    
    
  }
  const moveLeft = function(){
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left -= 10
    block.style.left = left + "px"
    
  }
  const moveDown = function(){
    const block = document.getElementById("block")
    let top = parseInt(block.style.top) || 0 
    top += 10
    block.style.top = top + "px"
    
  }
  const moveUp = function(){
    const block = document.getElementById("block")
    let top = parseInt(block.style.top) || 0
    top -= 10
    block.style.top = top + "px"
    
  }
  document.getElementById("right").onclick = function() {moveRight()}
  document.getElementById("left").onclick = function() {moveLeft()}
  document.getElementById("down").onclick = function() {moveDown()}
  document.getElementById("up").onclick = function() {moveUp()}


  // =============== manipulate css by javascript ==========================


  // const box = document.getElementById("block")

  // const enterColor = function () {
  //     box.style.backgroundColor = "#purple"
  // }
  
  // const leaveColor = function () {
  //     box.style.backgroundColor = "purple"
  // }

  // document.getElementById("playing-field").onclick = function() {

  //   document.getElementById("playing-field").style.backgroundColor="#1abc9c"

    // }
   
   
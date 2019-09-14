











const  randomHiddenColor = function (numberOfCard)
{
    let arrayOfColor =[]
    let letters = '0123456789ABCDEF'
    let color = '#'
    for(let j=0;j<numberOfCard;j++)
    {
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        arrayOfColor.push(color)
        }

}






const creatingCards = function (numberOfCard){

    for(let i=0;i<numberOfCard;i++)
    {
    $("#parent").append('<div class="box" id=cardNumber'+i+'></div>')
    
    }


}





$('button').on("click",function(){

    let numberOfCards=$("#numberOfCards").val()
    creatingCards(numberOfCards)
    randomHiddenColor()
    

})


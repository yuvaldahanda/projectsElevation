function suspendMyJsTwoSecond() { }






let checkIfCardsSame = []
let counter = 0
$("#parent").on("click", ".box", function () {
    counter++
    checkIfCardsSame.push($(this).data().color)
    $(this).css("background-color", $(this).data().color)
    if (counter == 2) {
      //  setTimeout(suspendMyJsTwoSecond, 3000);
        if(checkIfCardsSame[0]==checkIfCardsSame[1])
        {
            console.log("same same")
            counter = 0
            checkIfCardsSame = []
        }
        else{
            console.log("keep try")
            counter = 0
            checkIfCardsSame = []
        }
    }
    


})











function addDataColorToDiv(arrayOfColors) {

    for (let i in arrayOfColors) {
        $("#cardNumber" + i).attr('data-color', function (index) {
            return arrayOfColors[i];
        });
    }




}




function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;


    while (0 !== currentIndex) {


        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;


        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}





const randomHiddenColor = function (numberOfCard, arrayOfColor) {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let j = 0; j < numberOfCard / 2; j++) {
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        arrayOfColor.push(color)
        arrayOfColor.push(color)
        color = "#"
    }
    return shuffle(arrayOfColor)

}






const creatingCards = function (numberOfCard) {

    for (let i = 0; i < numberOfCard; i++) {
        $("#parent").append('<div class="box" id=cardNumber' + i + '></div>')

    }


}





$('button').on("click", function () {
    let arrayOfColors = []
    let numberOfCards = $("#numberOfCards").val()
    creatingCards(numberOfCards)
    arrayOfColors = randomHiddenColor(numberOfCards, arrayOfColors)
    addDataColorToDiv(arrayOfColors)

})


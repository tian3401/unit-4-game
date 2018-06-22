//Variables==========================================================================================================
var ranNum, metalOneRan, metalTwoRan, metalThreeRan, metalFourRan,valOfButton, winCount=0, loseCount=0, userScore=0;

//Functions==========================================================================================================

$('#userScore').text(userScore);

function startGame(){
    //Generates a Random Number that the user has to match
    ranNum= Math.floor(Math.random()*112)+19;
    $('#compScore').text(ranNum);
    //Generates a Random Number associated to each metal 
    metalOneRan= Math.floor(Math.random()*12)+1;
    $('#buttonOne').attr('data-val',metalOneRan);
    metalTwoRan= Math.floor(Math.random()*12)+1;
    $('#buttonTwo').attr('data-val',metalTwoRan);
    metalThreeRan= Math.floor(Math.random()*12)+1;
    $('#buttonThree').attr('data-val',metalThreeRan);
    metalFourRan= Math.floor(Math.random()*12)+1;
    $('#buttonFour').attr('data-val',metalFourRan);
    userScore=0;
    $('#userScore').text(userScore);

}

function buttonValue(){
    userScore += $(this).data('val');
    $('#userScore').text(userScore);
    if(userScore== ranNum){
        winCount++;
        $('#wins').text(winCount);
        startGame();
    }
    if(userScore>ranNum){
        loseCount++;
        $('#losses').text(loseCount);
        startGame();
    }
}

$('button').on('click',buttonValue);

window.onload= startGame;

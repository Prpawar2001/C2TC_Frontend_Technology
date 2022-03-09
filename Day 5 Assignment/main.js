var randomNumber1 = Math.floor(Math.random() * 6 ) + 1; //generating random number between 1-6

var randomDiceimage1 = "images/dice" + randomNumber1 + ".png"; // for getting random number png 1-6

document.querySelectorAll("img")[0].setAttribute("src", randomDiceimage1);


var randomNumber2 = Math.floor(Math.random() * 6 ) + 1; //generating random number between 1-6

var randomDiceimage2 = "images/dice" + randomNumber2 + ".png"; // for getting random number png 1-6

document.querySelectorAll("img")[1].setAttribute("src", randomDiceimage2);


var randomNumber3 = Math.floor(Math.random() * 6 ) + 1; //generating random number between 1-6

var randomDiceimage3 = "images/dice" + randomNumber3 + ".png"; // for getting random number png 1-6

document.querySelectorAll("img")[2].setAttribute("src", randomDiceimage3);


var randomNumber4 = Math.floor(Math.random() * 6 ) + 1; //generating random number between 1-6

var randomDiceimage4 = "images/dice" + randomNumber4 + ".png"; // for getting random number png 1-6

document.querySelectorAll("img")[3].setAttribute("src", randomDiceimage4);

if((randomNumber1 > randomNumber2) && ((randomNumber1 > randomNumber3) && (randomNumber1 > randomNumber4)))
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins !!";
}else if((randomNumber2 > randomNumber1) && ((randomNumber2 > randomNumber3) && (randomNumber2 > randomNumber4)))
{
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins!!";
}else if((randomNumber3 > randomNumber2) && ((randomNumber3 > randomNumber1) && (randomNumber3 > randomNumber4)))
{
    document.querySelector("h1").innerHTML = "🚩 Player 3 wins!!";
}else if((randomNumber4 > randomNumber2) && ((randomNumber4 > randomNumber3) && (randomNumber4 > randomNumber1)))
{
    document.querySelector("h1").innerHTML = "🚩 Player 4 wins!!";
}else
{
    document.querySelector("h1").innerHTML = "It\'s a draw !";
}
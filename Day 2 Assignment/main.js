
var allButtons = document.getElementsByTagName("button");
var copyButtons = [];

for(let i=0; i < allButtons.length; i++)
{
    copyButtons.push(allButtons[i].classList[1]);
}

function buttonColorChange(buttonclicked) {
    if(buttonclicked.value === "red")
    {
        buttonsRed();
    }
    else if(buttonclicked.value === "green")
    {
        buttonsGreen();
    }
    else if(buttonclicked.value === "reset")
    {
        buttonsColorReset();
    }
    else if(buttonclicked.value === "random")
    {
        randomColor();
    }
}

function buttonsRed() {
    for(let i=0; i < allButtons.length; i++)
    {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-danger");
    }
}

function buttonsGreen() {
    for(let i=0; i < allButtons.length; i++)
    {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-success");
    }
}

function buttonsColorReset() {
    for(let i=0; i < allButtons.length; i++)
    {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyButtons[i]);
    }
}

function randomColor() {
    for(let i=0; i < allButtons.length; i++)
    {
        let n = Math.floor(Math.random() * allButtons.length);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyButtons[n]);
    }
}
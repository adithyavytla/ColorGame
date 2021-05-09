var numSquares = 6;
var colors = [];
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else{
                numSquares = 6;
            }
            reset();
        });
    }
}

function setUpSquares(){
    for(var i=0; i<squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked squares
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    // generate new random colors
    colors = generateRandomColors(numSquares);
    // pick a new random color and change color of squares
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // set colors Again
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array and add random colors
    var arr = [];
    for(var i=0; i < num; i++){
        // get random colors and push into colors
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // pick a rgb from 0 - 255 using Math.randon()
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    // create a string for RGB
    return "rgb("+ r + ", " + g + ", " + b + ")";
}

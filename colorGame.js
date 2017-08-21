var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();


function init() {
    //mode buttons
    setUpModeBtn();
    setUpSquares();
    reset();
}


function setUpModeBtn() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

            reset();
            //how many squares
            //pick new color
            //pick a new color 
            //update 
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        //clicking on a square
        squares[i].addEventListener("click", function() {
            //grab a color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset() {
    colors = generateRandomColors(numSquares);
    //pick new random from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color 
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    //change squres
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelBlue";
}


resetButton.addEventListener("click", function() {
    reset();
});

//add initial colors to square
//change color 
function changeColors(color) {
    // loop and change
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }

}


//random colors to squares 
function pickColor(argument) {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


//random colors to array
function generateRandomColors(num) {
    //make an arr
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());

    }

    return arr;
}

//generate RGB numbers for colors 
function randomColor() {
    //pick R from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick G from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick B from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return ("rgb(" + r + ", " + g + ", " + b + ")");
}
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); 
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	
	
});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor
	// change colors of squares
	for(var i = 0; i < squares.length; i++) {
	//add colors to squares
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	messageDisplay.textContent = "";

});


colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++) {
	//add colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listener
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			resetButton.textContent = "Play Again?"
			h1.style.backgroundColor = clickedColor
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor)
		} else {
			messageDisplay.textContent = "Try Again!"
			this.style.backgroundColor = "#232323";
		}
	});
}

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change all squares to match the correct color
		squares[i].style.backgroundColor = color
	}
}

function pickColor() {
	//pick random number between 1 and last index of colors array
	var random = Math.floor(Math.random() * colors.length)
	//use that number to access that color in colors array
	//return that color
	return colors[random];
}

function generateRandomColors(num) {
	//make an arraay
	var arr = []
	//make num random colors to array
	for (var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
		
	}
	// return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256); //256 because you need to round down to the number you need
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
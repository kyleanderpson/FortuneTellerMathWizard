var numberInput //= document.getElementById("half-input").value;
var numberButton //= document.getElementById("half-button");
var fortuneInput //= document.getElementById("fortune-input").value;
var fortuneButton //= document.getElementById("fortune-button");
var fortuneOutput //= document.getElementById("fortune-output");

window.addEventListener('DOMContentLoaded', function() {
  numberInput = document.getElementById("half-input").value;
  numberButton = document.getElementById("half-button");
  fortuneInput = document.getElementById("fortune-input");
  fortuneButton = document.getElementById("fortune-button");
  fortuneOutput = document.getElementById("fortune-output");

  numberButton.addEventListener("click", halveFunc);
  fortuneButton.addEventListener("click", fortuneFunc);


});


var bandArray1 = ["", "The ", "Some ", "Just ", "Tyler, The ", "A ", "Just The ", "Just A ", "Tom Petty and the ", "Alice in ", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var bandArray2 = ["Velvet ", "Tame ", "Beach ", "Unknown ", "Sex ", "Shitty ", "Hike ", "Pink ", "Lost ", "Backstreet ", "Maroon ", "Rolling ", "Red Hot ", "Guns N' ", "Green ", "Beastie ", "Def ", "Blink-", "Foo ", "Fall out ", "Bon ", ]
var bandArray3 = ["Beatles", "Garden", "Youth ", "Knives ", "Naked", "Day", "Six", "Orchestra", "Jam", "People"]



function halveFunc() {
  console.log("halveFunc was called.");
  console.log("Number to cut in half is " + numberInput.innerText);
  var halfNumber = numberInput/2;
}

function fortuneFunc() {
  console.log("fortuneFunc was called.");
  console.log("user name is: " + fortuneInput.innerText);

  var randomIndex1 = Math.floor( Math.random() * bandArray1.length );
  var randomIndex2 = Math.floor( Math.random() * bandArray2.length );
  var randomIndex3 = Math.floor( Math.random() * bandArray3.length );

  var randomRed = Math.random() * 255;
  var randomBlue = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomSize = Math.random() * 24 + 24;
  var outputColorString = "rgb(" + randomRed + "," + randomBlue + "," + randomGreen + ")";
  var backgroundColorString = "rgb(" + randomBlue + "," + randomGreen + "," + randomRed + ")";
  var randomSizeString = randomSize + "pt";
  console.log(randomRed);
  console.log(randomBlue);
  console.log(randomGreen);
  console.log(outputColorString);

  fortuneOutput.style.color = outputColorString;
  fortuneOutput.style.fontSize = randomSizeString;
  fortuneOutput.style.backgroundColor = backgroundColorString;
  fortuneOutput.innerText = "Your Band Name is: " + bandArray1[randomIndex1] + bandArray2[randomIndex2] + bandArray3[randomIndex3]
}

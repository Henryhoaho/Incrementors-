// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var minus10Btn = document.getElementById("minus10");
var add10Btn = document.getElementById("plus10");
var add50Btn = document.getElementById("plus50");
var minus1Btn = document.getElementById("minus1");
var minus50Btn = document.getElementById("minus50");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus1Btn.addEventListener("click", add1);
minus10Btn.addEventListener("click", sub10);
add10Btn.addEventListener("click", plus10);
add50Btn.addEventListener("click", plus50);
minus1Btn.addEventListener("click", minus1);
minus50Btn.addEventListener("click", minus50);
function add1() {
  counter += 1;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}

function plus10() {
  counter += 10;
  displayEl.innerHTML = counter;
}

function plus50() {
  counter += 50;
  displayEl.innerHTML = counter;
}
function minus1() {
  counter -= 1;
  displayEl.innerHTML = counter;
}
function minus50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = ""; // clears the input

  story += newWord;

  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");

rand1Btn.addEventListener("click", showRand1);
rand2Btn.addEventListener("click", showRand2);
rand3Btn.addEventListener("click", showRand3);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

function showRand2() {
  var ranum = Math.random() * 101;
  ranum = ranum.toFixed(3);
  rand2OutEl.innerHTML = ranum;
}

function showRand3() {
  var ran2 = Math.random() * 10 - 5;
  ran2 = ran2.toFixed(3);
  rand3OutEl.innerHTML = ran2;
}

var rand4 = document
  .getElementById("rand4")
  .addEventListener("click", showRand4);
var rand4OutEl = document.getElementById("rand4-out");
function showRand4() {
  let smallNum = +document.getElementById("rand-in1").value;
  let largerNum = +document.getElementById("rand-in2").value;

  let m = Math.random() * (largerNum - smallNum + 1) + smallNum;
  m = Math.floor(m);

  document.getElementById("rand4-out").innerHTML = m;
}
var randSizeBtn = document
  .getElementById("random-size")
  .addEventListener("click", randomFontSize);

function randomFontSize() {
  let fontSize = Math.random() * (25 - 5) + 5;
  var fontString = `${fontSize}px`;
  document.body.style.fontSize = fontString;
}

var randomColor = document
  .getElementById("random-rgb")
  .addEventListener("click", randomColor);

function randomColor() {
  let red = Math.random() * 255;
  let green = Math.random() * 255;
  let blue = Math.random() * 255;
  var rgbString = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("HTML").style.background = rgbString;
}

var resetbtn = document
  .getElementById("reset")
  .addEventListener("click", reset);

function reset() {
  displayEl.innerHTML = 0;
  stringOutEl.innerHTML = `Once upon a time,`;
  rand1OutEl.innerHTML = `----------`;
  rand2OutEl.innerHTML = `----------`;
  rand3OutEl.innerHTML = `----------`;
  rand4OutEl.innerHTML = `----------`;
  document.getElementById("rand-in1").value = ``;
  document.getElementById("rand-in2").value = ``;
  document.getElementById("HTML").style.background = `#9ae4c8`;
  document.body.style.fontSize = `16px`;
}

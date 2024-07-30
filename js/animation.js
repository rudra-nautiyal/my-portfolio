// Define DOM elements

const heroImage = document.querySelector("#hero__animation__img");

const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__Content");
const trContent = document.querySelector("#grid__tr__Content");
const blContent = document.querySelector("#grid__bl__Content");
const brContent = document.querySelector("#grid__br__Content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

// Define colors and position
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// Define corner that is open

let activeCorner = "";

// Add an eventlistener to windows object to listen for resize events

window.addEventListener("resize", handleWindowResize);

//Function that handles the styling when resizing window

function handleWindowResize() {}

//Store last reverse animation, ready to be played

let lastReverseAnimation = "";

// Play animation function

function playAnimation(animation, reverseAnimation) {}

function playClosingAnimation(reverseAnimation) {}

// Onclick corner button functions
tlBtn.onclick = function () {
  if (activeCorner === "top-left") {
    playClosingAnimation();
  }
};

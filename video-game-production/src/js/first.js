///////////////////////////////////////////////////////////////////////////////
// 
// first.js
// --------
// my first javascript video game
// 
// 
// 
/*****************************************************************************/
"use strict";

// INCLUDES ///////////////////////////////////////////////////////////////////


// GLOBALS ////////////////////////////////////////////////////////////////////

var canvas = undefined;
var canvasContext = undefined;


// FUNCTIONS //////////////////////////////////////////////////////////////////

function start() {
  canvas = document.getElementById("myCanvas");
  canvasContext = canvas.getContext("2d");
  main();
}


///////////////////////////////////////////////////////////////////////////////

function end() {
}


///////////////////////////////////////////////////////////////////////////////

function update() {
}


///////////////////////////////////////////////////////////////////////////////

function draw() {
  canvasContext.fillStyle = "blue";
  canvasContext.fillRect(0,0, canvas.width, canvas.height);
}


///////////////////////////////////////////////////////////////////////////////

function main() {
  update();
  draw();
  window.setTimeout(main, 1000/60);
}


// START PROGRAM //////////////////////////////////////////////////////////////
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', start);
=======
document.addEventListener('DOMContentLoaded', first_js.start);
>>>>>>> 75afb071d755e61dfdaff3cb3e4f4598a54c3056

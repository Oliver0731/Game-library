// GAME LIBRARY for HTML CANVAS

// Global Variables
let mouseX;
let mouseY;

let keyPressed = {};

// Event Stuff
document.addEventListener("mousemove", mousemoveLibHandler);
document.addEventListener("keydown", keydownLibHandler);
document.addEventListener("keyup", keyupLibHandler);

function mousemoveLibHandler(e) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(e.clientX - cnvRect.left);
  mouseY = Math.round(e.clientY - cnvRect.top);
}

function keydownLibHandler(e) {
  keyPressed[e.code] = true;
}

function keyupLibHandler(e) {
  keyPressed[e.code] = false;
}

// Helper Functions

/*
 * dist(x1, y1, x2, y2)
 * Determines distance between two points (x1, y1), (x2, y2)
 * param: x1 (x-coordinate of first point)
 * param: y1 (y-coordinate of first point)
 * param: x2 (x-coordinate of second point)
 * param: y2 (y-coordinate of second point)
 * return: distance between (x1, y1) and (x2, y2)
 */
function dist(x1, y1, x2, y2) {}

/*
 * constrain(val, low, high)
 * Constrain a value to be within a range.
 * param: val (the value to constrain)
 * param: low (minimum limit of range, inclusive)
 * param: high (maximum limit of range, inclusive)
 * return: the constrained value (provided value is not modified)
 */
function constrain(val, low, high) {}

/*
 * ptInRect(x, y, rect)
 * Determine if a point is within a rectangle object
 * param: x (x-coordinate of point)
 * param: y (y-coordiante of point)
 * param: rect (rectangle object with x, y, w and h properties)
 * return: true or false
 */
function ptInRect(x, y, rect) {}

/*
 * ptInCircle(x, y, circle)
 * Determine if a point is within a circle object
 * param: x (x-coordinate of point)
 * param: y (y-coordiante of point)
 * param: circle (circle object with x, y and r properties)
 * return: true or false
 */
function ptInCircle(x, y, circle) {}

/*
 * rectCollide(rect1, rect2)
 * Determine if two rectangle objects collide
 * param: rect1 (rectangle object with x, y, w and h properties)
 * param: rect2 (rectangle object with x, y, w and h properties)
 * return true or false
 */
function rectCollide(rect1, rect2) {}

/*
 * circleCollide(circle1, circle2)
 * Determine if two circle objects collide
 * param: circle1 (circle object with x, y and r properties)
 * param: circle2 (circle object with x, y and r properties)
 * return true or false
 */
function circleCollide(circle1, circle2) {}

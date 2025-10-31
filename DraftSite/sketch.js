let title1
let xV=14
let yV=8
let x=3
let y=3

let link1
let link2

function setup() {
//  createCanvas(400, 400);
  
  title1= select("#title1")
  link1= select("#link1")
  link2= select("#link2")

}

function draw() {
 // background('yellow');
  

  link2.position(x, y)
  link1.position(y,x)
  
  if (x<2 || x> windowWidth-20){
    xV=-xV
  }
  if (y<2 || y> windowHeight-20){
    yV=-yV
  }
  
  
  x+=xV
  y+=yV
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
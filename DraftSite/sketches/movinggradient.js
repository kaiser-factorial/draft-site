let x=0
let eCount=0
let eSize = 200
let r
let g
let b

let col
function setup() {
  createCanvas(windowWidth, windowHeight);
   background(255)
  noStroke()
r = random(255)
g = random(255)
b=random(255)
  
}

function draw() {
 g= random(7)
  
  col1=color('#f7f714') 
  col2= color(r, g, b)
  
  let i=map(x, 0, width, 0, PI)
  i= sin(i)
  
  col= lerpColor(col1, col2, i)

 fill(col)
 rect(x,0,3,height/2)
  rect(width-x, height/2, 3, height/2)
  
  if (x<=width){
    x+=3
  }else{
    r = random(255)
//    g = random(255)
    b=random(255)
    background(255)
    x=0

  }
  
}


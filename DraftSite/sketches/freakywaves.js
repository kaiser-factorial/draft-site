


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
noFill()
  strokeWeight(1)

  
}

function draw() {
  
  for (let r=0; r<(windowWidth/100); r++){
    for (let x=0 ; x< windowWidth*1.2 ; x++){
  
 let y= 30*cos(x/20)+45
 let y2= 30*sin(x/20)+45

  if (r%2==0){

    stroke('red')
 ellipse(x*noise(frameCount*.02001), y+r*75 +15, 14)

    stroke('white')
  ellipse((x+2)*noise(frameCount*.02), y+r*75 +15, 15)
  }
if (r%2==1){

  stroke('blue')
  ellipse(x, y2+r*75 +15, 13)

  stroke('teal')
  ellipse(x-2, y2+r*75 +15, 15)

  
}
    }}
  for (let i=0; i<1237 ; i++){
     if (i %1231 ==0){
    fill('yellow')
    ellipse(random(windowWidth), random(windowHeight), random(6, 25))
  }else{
    noFill()
  }

}}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
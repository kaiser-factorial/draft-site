let sw=10
let c='black'
let ts=1
let cont=0
function setup() {
  createCanvas(windowWidth, windowHeight-75);
  background(255);
 

  rect(0,0,windowWidth, 140)
  
  //Instructions
  text('Press mouse to draw.', 20, 15)
  text('Double Click to toggle Continuous Draw mode on/off.', 20, 35)
  text('Press up/down arrow keys to increase/decrease stroke width.', 20, 55)
  text('Press the following keys to change stroke color:', 20, 75)
   text('0 = black', windowWidth/9-20, 95)
  text('b = blue', 2*windowWidth/9-20, 95)
  text('g = green', 3*windowWidth/9-20, 95)
  text('o = orange', 4*windowWidth/9-20, 95)
  text('p = purple', 5*windowWidth/9-20, 95)
  text('r = red', 6*windowWidth/9-15, 95)
  text('t = turquoise', 7*windowWidth/9-30, 95)
  text('y = yellow', 8*windowWidth/9-20, 95)
  text('Press "e" to toggle Eraser.', 20, 115)
  text('Press SPACEBAR to clear canvas.', 20, 135)
  
  
  
  
}

function draw() {
print(cont)
  strokeWeight(.5)
  stroke(c)
  
  
  if (mouseIsPressed){
   
    strokeWeight(sw)
  if(mouseY>142){
  line(mouseX, mouseY, pmouseX, pmouseY)
  }
  
 
  
  
}

  if (cont%2==1){
  strokeWeight(sw)   
    if (mouseY>142){
      line(mouseX, mouseY, pmouseX, pmouseY)
  }} 
}

function doubleClicked(){
  cont++
}

function keyPressed(){
 
  
 // STROKE:  
  if (key == 'b'){
    c='blue'
    
  }
  if (key == 'y'){
    c='yellow'
  }
  if (key == 'r'){
    c='red'
  }
  if (key=='g'){
    c='green'
  }
  if (key=='p'){
    c='purple'
  }
  if (key=='o'){
    c='orange'
  }
  if (key =='t'){
    c='turquoise'
  }
  if (key=='0'){
    c='black'
  }
  if (key== 'e'){
    c='white'
  }
  
  // WEIGHT:
  if (keyCode== UP_ARROW){
    sw++
  }
  if (keyCode==DOWN_ARROW){
    if (sw>1){
      sw--
    }else{
      sw=sw
    }
  }
   if (keyCode==32){
    strokeWeight(.5)
     background(255)
    //resets background when spacebar is pressed

 cont=0 
  //Instructions
  rect(0,0,windowWidth, 140)
  
  //Instructions
  text('Press mouse to draw.', 20, 15)
  text('Double Click to toggle Continuous Draw mode on/off.', 20, 35)
  text('Press up/down arrow keys to increase/decrease stroke width.', 20, 55)
  text('Press the following keys to change stroke color:', 20, 75)
   text('0 = black', windowWidth/9-20, 95)
  text('b = blue', 2*windowWidth/9-20, 95)
  text('g = green', 3*windowWidth/9-20, 95)
  text('o = orange', 4*windowWidth/9-20, 95)
  text('p = purple', 5*windowWidth/9-20, 95)
  text('r = red', 6*windowWidth/9-15, 95)
  text('t = turquoise', 7*windowWidth/9-30, 95)
  text('y = yellow', 8*windowWidth/9-20, 95)
  text('Press "e" to toggle Eraser.', 20, 115)
  text('Press SPACEBAR to clear canvas.', 20, 135)
  }
}
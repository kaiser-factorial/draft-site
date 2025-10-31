stars=[]
index=0
let col1


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<500; i++){
    stars.push({x:random(width), y:random(height), size: random(17), speed: random(-8,8)})
    
  }
}

function draw() {
  background(0);
  col1=color(random(255), random(255), random(255))
  for (let i=0 ; i<300 ; i++){
    let s= stars[i]
    s.y+=s.speed
    
    if (s.y>height-1 || s.y<1){
      s.speed=-s.speed + random(-2,2)
s.x+=s.speed
      if(s.x<0 || s.x>width){
        print(i)
      }
    }
    fill(col1)
    ellipse(s.x, s.y, s.size+ random(-2,2))
    fill('white')
    ellipse(s.x+1, s.y+1, s.size+ random(-2,2)-5)
   
  }
  
}
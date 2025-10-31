// Create a new p5 instance with a constructor function
const spikesSketch = (p) => {
  let ct = 12;

  function getCanvasSize() {
    const w = Math.max(100, 0.5 * (window.innerWidth - 200));
    return { w, h: w };
  }

  p.setup = () => {
    const { w, h } = getCanvasSize();
    let canvas = p.createCanvas(w, h);
    canvas.parent('spikes-container');
  };

  p.windowResized = () => {
    const { w, h } = getCanvasSize();
    p.resizeCanvas(w, h);
  };

  p.draw = () => {
    p.background(255, 220, 0);

    for (let i = 0; i < 2 * p.PI; i += p.PI / ct) {
      p.line(p.width/2, p.height/2, 
             p.width/2 + p.mouseX * p.cos(i), 
             p.height/2 + p.mouseY * p.sin(i));
      p.fill('blue');
      p.ellipse(p.width/2 + p.mouseX * p.cos(i), 
                p.width/2 + p.mouseY * p.sin(i), 30);
    }
    
    if (p.mouseIsPressed && 
        p.mouseX >= 0 && p.mouseX <= p.width && 
        p.mouseY >= 0 && p.mouseY <= p.height) {
      ct = p.int(p.random(2, 36));
      p.strokeWeight(p.random(1, 5));
    }
  };
};

// Create a new instance of the sketch
new p5(spikesSketch);


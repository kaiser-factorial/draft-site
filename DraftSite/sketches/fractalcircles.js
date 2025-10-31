// Create a new p5 instance with a constructor function
const fractalCircles = (p) => {
  var song;

  function getCanvasSize() {
    const w = Math.max(100, 0.5 * (window.innerWidth - 200));
    return { w, h: w };
  }

  p.preload = () => {
    // Commented out audio loading - uncomment if you add the audio file
    // song = p.loadSound("SurvivalInstinctAldous.mp3");
  };

  p.setup = () => {
    const { w, h } = getCanvasSize();
    let canvas = p.createCanvas(w, h);
    canvas.parent('fractalcircles-container');
  };

  p.windowResized = () => {
    const { w, h } = getCanvasSize();
    p.resizeCanvas(w, h);
  };

  p.draw = () => {
    p.background(255, 220, 0,.1);
    drawCircles(p.width / 2, p.height / 2, p.width / 2 + p.random(-1, 1));
  };

  function drawCircles(x, y, radius) {
    p.noFill();
    p.circle(x, y, radius * 2 * p.noise(0.053 * (p.frameCount % 45)));
    
    if (radius > 75) {
      p.strokeWeight(3);
      p.stroke('yellow');
      drawCircles(x + radius / 2, y, radius / 2);
      p.strokeWeight(3);
      p.stroke('yellow');
      drawCircles(x - radius / 2, y, radius / 2);
      p.strokeWeight(3);
      p.stroke(0, 0, 255);
      drawCircles(x, y + radius / 2, radius / 2);
      p.strokeWeight(3);
      p.stroke(0, 0, 255);
      drawCircles(x, y - radius / 2, radius / 2);
    }
    
    if (radius < 100 && radius > 25) {
      p.strokeWeight(.5);
      p.stroke(255, 0, 0);
      drawCircles(x + radius / 2, y, radius / 2);
      p.strokeWeight(.5);
      drawCircles(x - radius / 2, y, radius / 2);
      p.strokeWeight(.5);
      drawCircles(x, y + radius / 2, radius / 2);
      p.strokeWeight(.5);
      drawCircles(x, y - radius / 2, radius / 2);
    }
  }

  
};

new p5(fractalCircles);
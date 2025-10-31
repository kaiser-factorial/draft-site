// Create a new p5 instance with a constructor function
const breathingBall = (p) => {
  let diameter = 5;
  let growing = 1;
  let shrinking = 0;
  let grad = 0;
  let col1, col2, col;

  function getCanvasSize() {
    const w = Math.max(100, 0.5 * (window.innerWidth - 200));
    return { w, h: w };
  }

  p.setup = () => {
    const { w, h } = getCanvasSize();
    let canvas = p.createCanvas(w, h);
    canvas.parent('breathing-container');
    p.noStroke();
    col1 = p.color(255, 0, 0);
    col2 = p.color(0, 0, 255);
    col = col1;
  };

  p.windowResized = () => {
    const { w, h } = getCanvasSize();
    p.resizeCanvas(w, h);
  };

  p.draw = () => {
    p.background(255,220,0);
    p.fill(col);
    grad = p.map(grad, diameter, p.width, 0, 1);

    p.ellipse(p.width/2, p.height/2, diameter);

    if (diameter >= p.width - 60) {
      growing = 0;
      shrinking = 1;
    }
    if (diameter <= 9) {
      growing = 1;
      shrinking = 0;
    }

    if (growing === 1) {
      col = p.lerpColor(col1, col2, (diameter/p.width));
      diameter += 3.5;
    }
    if (shrinking === 1) {
      col = p.lerpColor(col1, col2, (diameter/p.width));
      diameter -= 2.5;
    }
  };
};

// Create a new instance of the sketch
new p5(breathingBall);
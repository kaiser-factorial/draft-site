// Create a new p5 instance with a constructor function
const freakyWaves = (p) => {
 
  function getCanvasSize() {
    const w = Math.max(100, 0.5 * (window.innerWidth - 200));
    return { w, h: w };
  }

  p.setup = () => {
    const { w, h } = getCanvasSize();
    let canvas = p.createCanvas(w, h);
    canvas.parent('freakywaves-container');
    p.background(255);
    p.noFill();
    p.strokeWeight(1);
  };

  p.windowResized = () => {
    const { w, h } = getCanvasSize();
    p.resizeCanvas(w, h);
  };

  p.draw = () => {
    p.background(255, 220, 0);
    for (let r = 0; r < (p.width / 100); r++) {
      for (let x = 0; x < p.width * 1.2; x++) {
        let y = 30 * p.cos(x / 20) + 60;
        let y2 = 30 * p.sin(x / 20) + 60;

        if (r % 2 == 0) {
          p.stroke('green');
          p.ellipse(x * p.noise(p.frameCount * 0.02001), y + r * 85 + 15, 14);
          p.stroke('red');
          p.ellipse((x + 2) * p.noise(p.frameCount * 0.02), y + r * 85 + 15, 15);
        }
        if (r % 2 == 1) {
          p.stroke('blue');
          p.ellipse(x, y2 + r * 85 + 15, 13);
          p.stroke('teal');
          p.ellipse(x - 2, y2 + r * 85 + 15, 15);
        }
      }
    }
    
    for (let i = 0; i < 1237; i++) {
      if (i % 1231 == 0) {
        p.fill('yellow');
        p.ellipse(p.random(p.width), p.random(p.height), p.random(6, 25));
      } else {
        p.noFill();
      }
    }
  };
};

new p5(freakyWaves);

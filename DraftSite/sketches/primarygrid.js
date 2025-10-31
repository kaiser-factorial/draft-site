// Create a new p5 instance with a constructor function
const primaryGrid = (p) => {
  let rows = 7;
  let cols = 7;
  let counter = 0;
  let n;

  function getCanvasSize() {
    const w = Math.max(100, 0.5 * (window.innerWidth - 200));
    return { w, h: w };
  }

  p.setup = () => {
    const { w, h } = getCanvasSize();
    let canvas = p.createCanvas(w, h);
    canvas.parent('primarygrid-container');
    p.rectMode(p.CENTER);
  };

  p.windowResized = () => {
    const { w, h } = getCanvasSize();
    p.resizeCanvas(w, h);
  };

  p.draw = () => {
    p.background(255, 220, 0);
    p.translate(p.width/(2*cols), p.height/(2*rows));
    n = 1.5 * p.noise(0.01 * p.frameCount);
    
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        for (let i = 0; i < 8; i++) {
          if (i % 3 == 0) {
            let r = 255 * p.cos(p.map(i, 0, 6, 0, 2 * p.PI));
            let b = 255 - r;
            p.fill(r, 0, 0);
          } 
          if (i % 3 == 1) {
            let r = 255 * p.cos(p.map(i, 0, 6, 0, 2 * p.PI));
            let b = 255 - r;
            p.fill(0, 0, b);
          } 
          if (i % 3 == 2) {
            p.fill('yellow');
          }
          p.rect(x * p.width/cols, y * p.height/rows, 
                 n * p.width/cols - i * 9, n * p.height/rows - i * 7);
        }
      }
    }
    counter += 0.01;
  };
};

new p5(primaryGrid);
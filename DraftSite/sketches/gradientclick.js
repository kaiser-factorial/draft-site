// Create a new p5 instance with a constructor function
const gradientClick = (p) => {
  let x = 0;
  let col, col1, col2, colmouse;

  function getCanvasSize() {
    const w = Math.max(100, 0.5 * (window.innerWidth - 200));
    return { w, h: w };
  }

  p.setup = () => {
    const { w, h } = getCanvasSize();
    let canvas = p.createCanvas(w, h);
    canvas.parent('gradient-container');
    p.background(255, 220, 0);
    p.noStroke();
    col1 = p.color('#f7f714');
    col2 = p.color(p.random(255), p.random(255), p.random(255));
  };

  p.windowResized = () => {
    const { w, h } = getCanvasSize();
    p.resizeCanvas(w, h);
  };

  p.draw = () => {
    let i = p.map(x, 0, p.width, 0, p.PI);
    i = p.sin(i);
    col = p.lerpColor(col1, col2, i);
    let j = p.map(p.mouseX, 0, p.width, 0, 1);
    colmouse = p.lerpColor(col1, col2, j);
    p.fill(colmouse);
    p.ellipse(p.mouseX, p.mouseY, 80);
  };

  p.mousePressed = () => {
    if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
      p.background(255, 220, 0);
      col1 = p.color(p.random(255), p.random(255), p.random(255));
      col2 = p.color(p.random(255), p.random(255), p.random(255));
    }
  };
};

// Create a new instance of the sketch
new p5(gradientClick);
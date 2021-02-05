let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');

const fps = 30;
const frameRate = 1000/fps;
let past = Date.now();
let elapsed = 0;

const ALPHA_RATE = .008;
let stars = [];
let comets = [];

class Color
{
  r;
  g;
  b;

  constructor(r, g, b)
  {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  add(color)
  {
    return new Color(this.r+color.r, this.g+color.g, this.b+color.b);
  }

  subtract(color)
  {
    return new Color(this.r-color.r, this.g-color.g, this.b-color.b);
  }

  scalarMult(x)
  {
    let r = Math.floor(this.r * x);
    let g = Math.floor(this.g * x);
    let b = Math.floor(this.b * x);

    return new Color(r, g, b);
  }

  static lerpColor(color1, color2, lerp)
  {
    let colorDiff = color2.subtract(color1);
    colorDiff = colorDiff.scalarMult(lerp);

    return color1.add(colorDiff);
  }
}

const NAVYBLUE = new Color(26, 24, 67);
const PINK = new Color(207, 98, 140);
const REDPINK = new Color(98, 52, 108);
const LIGHTBLUE = new Color(92, 104, 212);
const PALEYELLOW = new Color(231, 210, 124);
const PINKRED = new Color(225, 66, 99);
const PALENAVYBLUE = new Color(78, 65, 100);
const PURPLE = new Color(129, 54, 139);
const PURPLEGRAY = new Color(121, 90, 138);
const CHARCOAL = new Color(70, 70, 70);
const WHITE = new Color(255, 255, 255);

let colorPalette = [];
//colorPalette.add(NAVYBLUE);
colorPalette.push(PINK);
colorPalette.push(REDPINK);
colorPalette.push(LIGHTBLUE);
colorPalette.push(WHITE);
//colorPalette.add(PALEYELLOW);
colorPalette.push(PINKRED);
//colorPalette.add(PALENAVYBLUE);
colorPalette.push(PURPLE);
//colorPalette.add(PURPLEGRAY);
//colorPalette.add(CHARCOAL);

function resizeCanvas()
{
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}

// Call update function at constant frame rate
function setFrameRate()
{
  // Game loop
  requestAnimationFrame(setFrameRate);

  elapsed = Date.now() - past;

  if(elapsed >= frameRate){
    past = Date.now() - (elapsed%(1000/fps));

    if(typeof update === "function")
      update();
  }
}

function setup()
{
  setFrameRate();
  resizeCanvas();
}

function update()
{
  ctx.clearRect(0,0,canvas.width,canvas.height);

  let randNum = Math.random();

  // Creates star based on probability
  if(randNum > .93)
    stars.push(new Star);

  // Creates comet based on probability
  if(randNum > .95)
    comets.push(new Comet);

  drawElements(stars);
  drawElements(comets);
}

function drawElements(arr)
{
  // Goes through elements backwards to remove
  // any artifacting when removing elements from
  // the element array
  for (let i = arr.length-1; i >= 0; i--)
  {
    arr[i].update();

    if(!arr[i].alive)
      arr.splice(i, 1);
  }
}

function sigmoid(x)
{
  return 1/(1 + Math.exp(-10 * (x - 0.2)));
}

class PVector
{
  x;
  y;

  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }

  add(pos)
  {
    return new PVector(this.x + pos.x, this.y + pos.y);
  }

  subtract(pos)
  {
    return new PVector(this.x - pos.x, this.y - pos.y);
  }

  mult(x)
  {
    return new PVector(this.x * x, this.y * x);
  }

  clone()
  {
    return new PVector(this.x, this.y);
  }
}

class Comet
{
  position;
  velocity;
  maxRadius = 10;
  length = 40;
  alive = true;
  trail = [];

  constructor()
  {
    let x, y, xVel, yVel;

    if(Math.random() > 0.5)
    {
      x = Math.random()*canvas.width;
      y = -this.maxRadius;
    }
    else
    {
      x = canvas.width + this.maxRadius;
      y = Math.random()*canvas.height;
    }

    xVel = -(Math.random()*1 + 3);
    yVel = Math.random()*1 + 3;

    this.position = new PVector(x, y);
    this.velocity = new PVector(xVel, yVel);
  }

  checkAlive()
  {
    if(this.trail[this.trail.length-1].x < 0 || this.trail[this.trail.length-1].y > canvas.height)
      this.alive = false;
  }

  draw()
  {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.maxRadius, 0, 2*Math.PI);
    ctx.fillStyle = `rgb(${PALEYELLOW.r}, ${PALEYELLOW.g}, ${PALEYELLOW.b})`;
    ctx.fill();
    ctx.closePath();

    for (let i = 0; i < this.trail.length; i++) {
      let ratio = i/(this.trail.length-1);
      let color = Color.lerpColor(PALEYELLOW, PINKRED, sigmoid(ratio));
      let radius = (1-ratio)*this.maxRadius;

      ctx.beginPath();
      ctx.arc(this.trail[i].x, this.trail[i].y, radius, 0, 2*Math.PI);
      ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
      ctx.globalAlpha = .6*(1-ratio)
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.closePath();
    }
  }

  update()
  {
    this.draw();

    this.trail.unshift(this.position);
    if(this.trail.length > this.length)
      this.trail.pop();

    this.position = this.position.add(this.velocity);

    this.checkAlive();
  }
}

class Star
{
  position;
  color;
  alpha = -1;
  radius;
  maxRadius = 30;
  alive = true;

  constructor()
  {
    this.radius = Math.random()*this.maxRadius + 10;
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height;
    this.position = new PVector(x, y);

    let index = Math.floor(Math.random()*colorPalette.length);
    this.color = colorPalette[index];
  }

  draw()
  {
      let angle = 2.0 * Math.PI / 4.0;
      let halfAngle = angle/2.0;
      ctx.beginPath();
      ctx.moveTo(this.position.x + this.radius/2, this.position.y);
      for (let a = 0; a < 2*Math.PI; a += angle) {
          let sx = this.position.x + Math.cos(a) * this.radius * 0.5;
          let sy = this.position.y + Math.sin(a) * this.radius * 0.5;
          ctx.lineTo(sx, sy);
          sx = this.position.x + Math.cos(a + halfAngle) * this.radius * 0.2;
          sy = this.position.y + Math.sin(a + halfAngle) * this.radius * 0.2;
          ctx.lineTo(sx, sy);
      }
      ctx.closePath();

      ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b}`;
      ctx.globalAlpha = -Math.abs(this.alpha)+1;
      ctx.fill();
      ctx.globalAlpha = 1;
  }

  update()
  {
    this.draw();

    if(this.alpha+ALPHA_RATE > 1)
      this.alive = false;
    else
      this.alpha += ALPHA_RATE;
  }
}

setup();

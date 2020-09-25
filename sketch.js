var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);

  fixedRect = createSprite(400, 200, 80, 50);
  movingRect = createSprite(200,200, 30,80);
}

function draw() {
  background(0);  
  movingRect.x =mouseX
  movingRect.y =mouseY

  drawSprites();
}

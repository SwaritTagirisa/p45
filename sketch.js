var bow, arrow, scene;
var redB, pinkB, greenB, blueB, arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;

var score = 0;

function preload() {

  backgroundImage = loadImage("extraproject3bg2.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("manwithbow-removebg-preview.png");
  red_balloonImage = loadImage("zombie1-removebg-preview.png");
  green_balloonImage = loadImage("zombie2-removebg-preview.png");
  pink_balloonImage = loadImage("zombie3-removebg-preview.png");
  blue_balloonImage = loadImage("zombie4-removebg-preview.png") ;

}



function setup() {
  createCanvas(1000, 420);

  //creating background
  scene = createSprite(0, 208,30,0);
  scene.addImage(backgroundImage);
  scene.scale = 1.5;

  // creating bow to shoot arrow
  bow = createSprite(950, 100, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 0.2 ;

  score = 0
  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();


}

function draw() {
  if (keyDown("space")) {
    createArrow();

  }

  background(windowWidth,windowHeight);
  // moving ground
  scene.velocityX = -3

  if (scene.x < 27) {
    scene.x = scene.width / 2;
  }

  //moving bow
  bow.y = World.mouseY


  //creating continous enemies
  var select_balloon = Math.round(random(1, 4));

  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }

  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }


  drawSprites();

  drawSprites();
  fill("red");
  text("Score: " + score, 900, 50);
}


function redBalloon() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 280;
  red.scale = 0.23;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 280;
  blue.scale = 0.165;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 280;
  green.scale = 0.23;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 280;
  pink.scale = 0.23;
  pinkB.add(pink);
}


// Creating  arrows for bow
function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 900;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 300;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}
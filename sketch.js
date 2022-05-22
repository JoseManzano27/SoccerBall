var player1,player1img,player2,player2img;

var invisibleGround,invisibleWall1,invisibleWall2;

var background1,backgroundimg;

var score1,scoreimg;

var ball,ballimg;

function preload(){
  player1img= loadImage("sprites/ochoa.png");
  player2img= loadAnimation("sprites/benzema5.png","sprites/benzema5.png","sprites/benzema3.png","sprites/benzema3.png","sprites/benzema2.png","sprites/benzema2.png","sprites/benzema1.png","sprites/benzema1.png");

  backgroundimg = loadImage("sprites/background.jpg");

  scoreimg = loadImage("sprites/score.png");

  ballimg = loadImage("sprites/balon.png")
  
  }

function setup() {
  canvas = createCanvas(windowWidth-30,windowHeight-10);

  background1 = createSprite(width-880,height-600,200,200);
  background1.addImage(backgroundimg);
  background1.scale=0.24

  player1 = createSprite(400,200);
  player1.addImage(player1img);
  player1.scale=0.15;

  player2 = createSprite(700,200);
  player2.addAnimation("walking",player2img);
  player2.scale=0.15;

  ball = createSprite(windowWidth/2,windowHeight/2);
  ball.addImage(ballimg);
  ball.scale= 0.1;

  invisibleGround = createSprite(windowWidth/2,windowHeight-230,2000,20);
  invisibleGround.visible = false;

  invisibleWall1 = createSprite(windowWidth-1660,windowHeight-230,20,2000);
  invisibleWall1.visible = false;

  invisibleWall2 = createSprite(windowWidth-260,windowHeight-230,20,2000);
  invisibleWall2.visible = false;

  score1 = createSprite(windowWidth/2,windowHeight-65);
  score1.addImage(scoreimg);
  score1.scale=0.18;


}


function draw() {
  background("white");

  if((touches.lenght>0||keyDown("W"))&& player1.y >= height-350) {
    player1.velocityY = -20;
  }
  if(keyDown("A")){
    player1.x= player1.x-7;
  }
  if(keyDown("D")){
    player1.x= player1.x+7;
    
  }

  if((touches.lenght>0||keyDown("UP_ARROW"))&& player2.y >= height-350) {
    player2.velocityY = -20;
  }
  if(keyDown("LEFT_ARROW")){
    player2.x= player2.x-7;
  }
  if(keyDown("RIGHT_ARROW")){
    player2.x= player2.x+7;
    
  }

  //if(keyDown("E")&& player2.isTouching(ball)){
    //ball.x = ball.x + 5;
  //}

  player1.velocityY = player1.velocityY + 0.8;
  player2.velocityY = player2.velocityY + 0.8;
  
  ball.velocityY = ball.velocityY + 0.5;

  player1.collide(invisibleGround);
  player1.collide(invisibleWall1);
  player1.collide(invisibleWall2);
  player2.collide(invisibleGround);
  player2.collide(invisibleWall1);
  player2.collide(invisibleWall2);
  player2.collide(player1);
  player1.collide(player2);

  ball.collide(player2);
  ball.collide(player1);
  ball.collide(invisibleGround);
  ball.collide(invisibleWall1);
  ball.collide(invisibleWall2);


  drawSprites();
  
}

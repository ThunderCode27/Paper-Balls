var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
	
engine = Engine.create();
	world = engine.world;
Engine.run(engine);
	//Create the Bodies Here.

  ball = new ball(ball.x,ball.y);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  ball.diaplay();
}




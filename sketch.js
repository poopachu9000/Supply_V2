var helicopterIMG, helicopterSprite, packageSprite,packageIMG,side1,side2,bottom;
var packageBody,ground,body1,body2,body3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	side1=createSprite(485, height-90, 20,100);
	side1.shapeColor=color("red")
	side2=createSprite(315, height-90, 20,100);
	side2.shapeColor=color("red")

	bottom=createSprite(width/2, height-45, 200,20);
	bottom.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3});
	packageBody.isStatic = true;
	World.add(world, packageBody);
	
	body1 = Bodies.rectangle(485, height-90, 20,100 , {restitution:0.3});
	body1.isStatic = true;
	World.add(world, body1);
	body2 = Bodies.rectangle(315, height-90, 20,100 , {restitution:0.3});
	body2.isStatic = true;
	World.add(world, body2);
	body3 = Bodies.rectangle(width/2, height-35, 200,20, {restitution:0.3});
	body3.isStatic = true;
	World.add(world, body3);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  bottom.x= body3.position.x 
  bottom.y= body3.position.y 
  keyPressed();
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packageBody.isStatic = false;
  }
}




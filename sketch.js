
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var roof1,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  roof1 = new Roof(400,100,400,80);
  bob1 =new Bob(200,675,50)
  bob2 =new Bob(300,675,50)
  bob3 =new Bob(400,675,50)
  bob4 =new Bob(500,675,50)
  bob5 =new Bob(600,675,50)
  
  rope1 =new rope(bob1.body,roof1.body,-100, 0)
  rope2 =new rope(bob2.body,roof1.body,-50, 0)
  rope3 =new rope(bob3.body,roof1.body,0, 0)
  rope4 =new rope(bob4.body,roof1.body,50, 0)
  rope5 =new rope(bob5.body,roof1.body,100, 0)
}


function draw() {
  rectMode(CENTER);
  background("red");
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //bob1.options.isStatic = true;
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}




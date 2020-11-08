
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(500,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,800,70,70);
	bob2 = new Bob(270,800,70,70);
	bob3 = new Bob(340,800,70,70);
	bob4 = new Bob(410,800,70,70);
	ground = new Ground(300,80,300,20);
	rope = new Rope(bob1.body,{x:200,y:90});
	rope1 = new Rope(bob2.body,{x:270,y: 90});
	rope2 = new Rope(bob3.body,{x:340,y: 90});
	rope3 = new Rope(bob4.body,{x:410,y:90})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob4.body, bob1.body.position, {x:300,y:-100});
	}
  }
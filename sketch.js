const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,200,350,30)

	bob1=new Bob(400,450,50)

	bob2=new Bob(320,450,50) 

	bob3=new Bob(295,450,50)

	bob4=new Bob (452,450,50)

	bob5=new Bob(505,450,50)

	rope1=new Rope(bob1.body,roof.body,0,0)
	rope2=new Rope(bob2.body,roof.body,-50,0)
	rope3=new Rope(bob3.body,roof.body,-100,0)
	rope4=new Rope(bob4.body,roof.body,50,0)
	rope5=new Rope(bob5.body,roof.body,100,0)

	Engine.run(engine);
	
}


function draw() {
	rectMode(CENTER);
	background(200);

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function mouseDragged(){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x: 50 , y: 50});
    
}

function mouseReleased(){
    
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var dustbinbar1, dustbinbar2, dustbinbar3;
var paper;
var ground;
var world;
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

	//Create the Bodies Here.

     dustbinbar1=new Dustbin(430,680,200,20);
  	 dustbinbar2=new Dustbin(630,597,20,100);
	   dustbinbar3=new Dustbin(410,597,20,100);
  

    paper= new Paper(100,300,40);
    ground=new Ground(width/2,670,width,20);  
	
  World.add(world, ground);
}
  


function draw(){
  background(0);

  
  dustbinbar1.display();
  dustbinbar2.display();
  dustbinbar3.display();
  paper.display();
  ground.display();

  drawSprites();
 
}




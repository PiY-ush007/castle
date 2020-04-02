const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var log1
var engine,world








function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
   
 log1= new Log (290,300,50,50);
 log2=new Log (470,300,50,50);
 castle= new Rect (380,450,130,80);
door= new Door(380,500,30,50);



}

function draw() {
  background("black");
  Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);

  log1.display();
  log1.scale=0.5;
  log2.display();

  castle.display();
  door.display();
 

  

  
 
}
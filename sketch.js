const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1,box2,box3,box4,box5,box6
var pen,penimg;
var rope;

function preload(){
    penimg = loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    pen = createSprite(110,130,2,2)
    pen.addImage(penimg)
    pen.scale = 0.13;
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(885,300,180,20);
    box1 = new Block(840,270,40,40);
    box2 = new Block(883,270,40,40);
    box3 = new Block(920,270,40,40);
    box4 = new Block(850,230,40,40);
    box5 = new Block(900,230,40,40);
    box6 = new Block(875,190,40,40);
    
    //rope = new SlingShot(pen.body,{x:110,y:130})

}

function draw(){
    background("pink");
    text("Drag the hexagon to make the blocks fall", 200,100)
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display()
    box3.display()
   box4.display()
    box5.display()
    box6.display()
    pen.display();
    rope.display();
    
}

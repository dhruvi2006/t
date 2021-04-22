const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,700,60,70);
    pig1 = new Pig(770,700,50,50);
    box2 = new Box(840,700,60,70);
    log1 = new Log(770,640,225,PI/2);

    box3 = new Box(700,630,60,70);
    pig2 = new Pig(770,630,50,50);
    box4 = new Box(840,630,60,70);
    log2 = new Log(770,570,225,PI/2);

    //right
    log3 = new Log(850,450,150,-PI/7);
    box5 = new Box(780,460,60,70);
    //left
    log4 = new Log(700,450,150,PI/7);

    bird = new Bird(400,350);

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    
    box5.display();
    log3.display();
    log4.display();

    bird.display();
}
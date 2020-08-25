const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1,ground,bar1,bar2,bar3,barImage,rope1;
var gameState = "onSling";

function setup(){
    var canvas = createCanvas(1536,700);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(220,400,75,75);
    ground = new Ground2(1536/2,698,1536,40);
    ground1 = new Ground2(1536,350,20,700);
    ground2 = new Ground2(1536/2,10,1536,20);
    ground3 = new Ground2(10,350,20,700);
    base1 = new Ground2(650,600,300,20);
    base2 = new Ground2(1150,350,170,20);
   // invisibleGround = new Ground2(1536/2,677,1536,30);

    block1 = new Block(550,558,40,60);
    block2 = new Block(590,558,40,60);
    block3 = new Block(630,558,40,60);
    block4 = new Block(670,558,40,60);
    block5 = new Block(710,558,40,60);
    block6 = new Block(750,558,40,60);

    block11 = new Block2(590,498,40,60); 
    block12 = new Block2(630,498,40,60); 
    block13 = new Block2(670,498,40,60); 
    block14 = new Block2(710,498,40,60); 
    //block15 = new Block2(750,498,40,60); 

    block22 = new Block3(630,438,40,60);
    block23 = new Block3(670,438,40,60);

    block24 = new Block(650,378,40,60);

    blockl2 = new Block(1110,308,40,60);
    blockl1 = new Block(1150,308,40,60);
    blockl3 = new Block(1190,308,40,60);

    blockl11 = new Block3(1130,248,40,60);
    blockl12 = new Block3(1170,248,40,60);

    blockl21 = new Block2(1150,188,40,60);
    
    rope1 = new launcher(box1.body,{x:220,y:350});
    
    
 //  barImage = new Ground(1250,600,200,20);
 //  bar1 = new Ground(1150,600,20,200);
 //  bar2 = new Ground(1350,600,20,200);
}  

function draw(){
    background(55,43,43);
    Engine.update(engine);
    box1.display();
    ground.display();
    base1.display();
    base2.display();
    
    noStroke();
    fill(38,106,209);
    textSize(60);
    textFont("ALGERIAN");
    text("The boy is having a hard time knocking over these pins,",0,70);
    text("go help him out!",0,150);
    fill("#FE53A3");
    textSize(1);
    text("Level 1",560,650);
    text("Level 2",1055,400);

   //invisibleGround.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block11.display();
    block13.display();
    block14.display();
    
    block12.display();

    block22.display();
    block23.display();

    block24.display();
    
   blockl2.display();
   blockl1.display();
   blockl3.display();
   
   blockl11.display();
   blockl12.display();

   blockl21.display();

   rope1.display();
   
 //  barImage.display();
}
/*function keyPressed() {
    if(keyCode === UP_ARROW){
       Matter.Body.applyForce(box1.body,box1.body.position,{x:340,y:-340});
    }
}
*/

function mouseDragged(){
    if(gameState!=="launched"){
    Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
    rope1.fly();
    gameState = "launched";
}

function keyPressed() {
    if(keyCode === 32 && box1.body.speed < 1){
        Matter.Body.setPosition(box1.body,{x:220,y:450});
        //bird.trajectory = [];
      rope1.attach(box1.body);
       console.log(box1.body.speed);
       gameState = "onSling";
    
    }
}

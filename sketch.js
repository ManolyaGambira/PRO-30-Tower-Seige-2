const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;


function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(500,360,270,20);
  ground2 = new Ground(900, 200,200,20);

  // ground1 - level 4
      block1 = new Block(400,355,30,40);
      block2 = new Block(430,355,30,40);
      block3 = new Block(460,355,30,40);
      block4 = new Block(490,355,30,40);
      block5 = new Block(520,355,30,40);
      block6 = new Block(550,355,30,40);
      block7 = new Block(580,355,30,40);
      block8 = new Block(610,355,30,40);
  // ground1 - level 3
      block9 = new Block(430,290,30,40);
      block10 = new Block(460,290,30,40);
      block11 = new Block(490,290,30,40);
      block12 = new Block(520,290,30,40);
      block13 = new Block(550,290,30,40);
      block14 = new Block(580,290,30,40);
  // ground1 - level 2
      block15 = new Block(460,250,30,40);
      block16 = new Block(490,250,30,40);
      block17 = new Block(520,250,30,40);
      block18 = new Block(550,250,30,40);  
   // ground1 - level 1
      block19 = new Block(490,210,30,40);
      block20 = new Block(520,210,30,40);
      

   // ground2 - level 3
   block21 = new Block(830,195,30,40);
   block22 = new Block(860,195,30,40);
   block23 = new Block(890,195,30,40);
   block24 = new Block(920,195,30,40);
   block25 = new Block(950,195,30,40);
   block26 = new Block(980,195,30,40);
   // ground2 - level 2
   block27 = new Block(860,160,30,40);
   block28 = new Block(890,160,30,40);
   block29 = new Block(920,160,30,40);
   block30 = new Block(950,160,30,40);
   // ground2 - level 1
   block31 = new Block(890,120,30,40);
   block32 = new Block(920,120,30,40);
   
   ball = new Ball(0,0,40);

   slingShot = new Slingshot(ball.body,{x:200,y:200});
}

function draw() {
    background(248,225,125);
    Engine.update(engine);

    debug:true;


   ground1.display();
   ground2.display();

   // ground1 - level 4
      fill(158,252,253);
      block1.display();
      block2.display();
      block3.display();
      block4.display();
      block5.display();
      block6.display();
      block7.display();
      block8.display();
   // ground1 - level 3
      fill(225,61,60);
      block9.display();
      block10.display();
      block11.display();
      block12.display();
      block13.display();
      block14.display();
   // ground1 - level 2
      fill(65,136,139);
      block15.display();
      block16.display();
      block17.display();
      block18.display();
   // ground1 - level 1
      fill(239,159,157);
      block19.display();
      block20.display();


  // ground2 - level 3
      fill(158,252,253);
      block21.display();
      block22.display();
      block23.display();
      block24.display();
      block25.display();
      block26.display();
  // ground2 - level 2
      fill(225,61,60);
      block27.display();
      block28.display();
      block29.display();
      block30.display();
  // ground2 - level 1
      fill(65,136,139);
      block31.display();
      block32.display();

       
      ball.display();

      slingShot.display();

      textSize(20);
  fill("blue");
  text("DRAG AND RELEASE THE BALL TO DESTROY THE BOXES", 200, 50)
  fill("red");
  textSize(20);
  text("PRESS SPACE FOR A SECOND CHANCE !!",700,380)

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    slingShot.release();
  }

  function keyPressed() {
    if (keyCode === 32) {
      slingShot.attach(ball.body);
    }
}

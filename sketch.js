const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 var turn=0;
var particles=[];
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gamestate="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new  Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }
      function mousePressed(){
         if(gamestate!="end")
         {
            turn++;
            particle= new Particle(mouseX,10,10,10);
         }
      }
      
    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 ground.display();

 text("score" +score,700,100);
 text("700",  15,515 )
 text("400",  90,515 )
 text("900",  165,515 )
 text("350",  255,515 )
 text("300",  345,515 )
 text("600", 435,515 )
 text("800",  488,515 )
 text("100",  565,515 )
 text("800",  655,515 )
 text("1000",  732,515 )
 text(mouseX+":"+mouseY,mouseX,mouseY);

 fill("white");
 if(gamestate=="end"){
    textSize(100);
    text("gameover", 150,260)
} 
 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  score++;
}
for (var k = 0; k<divisions.length; k++) {
     
  divisions[k].display();
}
   for (var i = 0; i<plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  

  for (var j = 0; j<particles.length; j++) {
   
     particles[j].display();
   

  }
  if(particle!=null){
   particle.display();
   if(particle.body.position.y>500)
   {
      if(particle.body.position.x>200)
      {
         score=score+500;
         particle=null;
         if(turn>=5) gamestate="end";
      }
   }
} 

}

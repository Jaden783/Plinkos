
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particle = [];
var plinkos = [];
var divisions = [];
function preload()
{
	

}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	

	
	ground = new Ground(240,780,480,10);

	for(var i = 20 ; i<= 480 ; i = i+80){
		divisions.push(new Division(i , 700 , 10, 300))
	}

	
	
	
	for(var i = 20; i <= 480 ; i = i+60){
		plinkos.push(new Plinko(i,100,10))

	}

	for(var i = 18; i <= 480 ; i = i+50){
		plinkos.push(new Plinko(i,180,10))

	}

	for(var i = 20; i <= 480 ; i = i+60){
		plinkos.push(new Plinko(i,260,10))

	}

	for(var i = 18; i <= 480 ; i = i+50){
		plinkos.push(new Plinko(i,320,10))

	}

	

}


function draw() {
  
  background(0);
  Engine.update(engine);
 ground.display();
 
	for(var i = 0; i<= plinkos.length ; i ++){
		plinkos[i].display(); 
	
	}

if(frameCount % 60 === 0 ){
particle.push(new Particle(random(50,400),10,10))
	 
}
for(var i = 0; i< particle.length ; i ++){
particle[i].display();
console.log(particle[i])
}


}


async function drawPlinkos(){


}
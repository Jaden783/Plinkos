class Particle{

    constructor(x,y,r){
    var options = {resitution : 0.5};
    this.body = Bodies.circle(x,y,r,options);
    this.r = r
    
    World.add(world,this.body)
    }
    display(){
   push();
    var bobPos = this.body.position;
    translate(bobPos.x , bobPos.y)
    rotate(angle)
    fill ("white");
    ellipseMode(RADIUS);
    ellipse(0,0,8,8)
    pop();
    
    }
    
    
    
    
    }
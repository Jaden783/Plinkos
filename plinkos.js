class Plinko{

    constructor(x,y,r){
    var options = {resitution : 1, friction : 0.2, density :0.8, isStatic : true};
    this.body = Bodies.circle(x,y,r,options);
    this.r = r
    
    World.add(world,this.body)
    }
    display(){
    push();
    var bobPos = this.body.position;
    translate(bobPos.x , bobPos.y)
    fill ("green");
    ellipseMode(RADIUS);
    ellipse(0,0,5,5)
    pop();
    
    }
    
    
    
    
    }
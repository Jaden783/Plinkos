class Division {

    constructor(x,y,w,h){
    var options = {isStatic : true};
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w
    this.h = h
    World.add(world,this.body)
    }
    display(){
    push();
    var divPos = this.body.position;
    
    fill("white") 
    rectMode(CENTER)
    rect(divPos.x,divPos.y,this.w,this.h)
    pop();
    
    }
    
    
    
    
    }
    
    
    
    
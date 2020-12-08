class Bob{

    constructor(x,y,radius) {
     var options={
         inStatic: false,
         restitution:0.3,
         friction:1,
         density:1.2
     }
    
    this.body=Bodies.circle(x,y,radius,options)
    this.r=radius
    
    World.add(world, this.body);
    
    }
    
    display(){
        var pos =this.body.position;
        
        ellipseMode(CENTER);
        fill("orange");
        ellipse(pos.x, pos.y,this.r,this.r);
    }
    
    
    
    
    
    
    }
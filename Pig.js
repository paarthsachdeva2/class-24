class Pig{
    constructor(x,y){
        var options={
            density: 1.0,
            friction:1.0,
            restitution: 0.5
        }
            
            this.width=50;
            this.height=50;
            this.body=Bodies.rectangle(x,y,50,50,options);
            World.add(world,this.body);
        }
        display(){
            var pos=this.body.position;
            var angle=this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            stroke("red");
            fill("blue");
            rect(0,0,this.width,this.height);
            pop();
        }
        }




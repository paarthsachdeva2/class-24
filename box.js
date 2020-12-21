class Box{
  constructor(x,y,width,height){
    var option={
        restitution:0.5,
        friction:1.0,
        density:1.5
    }
   this.body=Bodies.rectangle(x,y,width,height,option)
   
   this.width=width;
   this.height=height
   World.add(world,this.body)

  }

  display(){
     var position=this.body.position 
     //var angle=this.body.angle
     push();
     translate(position.x,position.y);
     //rotate(130);
     rectMode(CENTER);
     stroke("green")
     fill("skyblue");
     rect(0,0,this.width,this.height);
     pop();



  }



}
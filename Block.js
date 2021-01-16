class Block{
  constructor(x,y,width,height){
      var options = {
          'restitiution':0.8,
          'friction':1.0,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      var angle = this.angle;

    push();
      if(this.body.speed < 3){
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("black");
        strokeWeight(6)
        rect(0, 0, this.width, this.height);
    pop();
    }
    else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity)
        this.body = this.body, this.body.position.x, this.body.position.y, 50, 50
        pop();
      }
  }
}
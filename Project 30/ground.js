class Ground {
  constructor(x, y, width, height){
      var options = {
        'isStatic':true
      }
      this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x, y, this.width, this.height,options); 
     
     this.image = loadImage("dustbingreen.png");
     World.add(world,this.body);

     
  }
  display(){
  var pos = this.body.position;
  imageMode(CENTER);
  strokeWeight(0);
  fill("black");
  image(this.image,pos.x,pos.y,200,200);
  pop();
  }
}
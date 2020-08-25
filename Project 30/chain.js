class launcher{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.04, 
			 length:10
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}
	attach(body1){
        this.launcher.bodyA = body1;
	}
	fly()
	{
		//World.remove(world,this.rope)
		this.launcher.bodyA=null;
	}
	display()
	{
		push();
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
            var pointB=this.pointB
           // var angle = this.bodyA.angle;
            //rotate(angle);
            

			strokeWeight(6);		
			stroke(0,0,0);
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
		pop();
	}
}

	


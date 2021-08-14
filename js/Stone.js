class Stone{
 constructor(x,y,r){
     var options={
         restitution:0.8
     }
 this.x=x;
 this.y=y
 this.r=r
 this.body=Bodies.circle(x,y,r,options)
 World.add(world,this.body)
 }
 show(){
     var pos=this.body.position
     push()
     translate(pos.x,pos.y)
     strokeWeight(1)
     fill("white")
     ellipseMode(CENTER)
     ellipse(0,0,this.r,this.r)
     noStroke()
     pop()
     

 }
}
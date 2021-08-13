const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base1;
var base;
var bridge;
var link;
var ground;
var stone=[];





function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground=new Base()
  base= new Base(75,75,37,500)
  base1=new Base(75,75,1163,500)

  bridge = new Bridge(15,{x:width/2-400,y:height/2});
  jointPoint=new Base(width-600,height/2+10,40,20)
   Matter.Composite.add(bridge.body,jointPoint)
   jointLink=new Link(bridge,jointPoint)
  link= new Link(base1,base)
 
  for(var i =0; i<=8;i++){
    var x =random(width/2-200,width/2+300);
    var y = random(-10,140);
    var stone = new Stone(x,y,80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);


  ground.show();
  base.show();
  base1.show();
  bridge.show();
  
  for(var stone of stones){
    stone.show()
  }

}

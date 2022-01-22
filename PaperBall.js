class PaperBall{
    constructor(x,y) {
var options = {
    isStatic:false
};
this.r = 30;
this.body = Bodies.circle(x,y,this.r,options);
World.add(world,this.body);
 }

display(){
    var pos = this.body.position;
    Push();
    balls(this.image,pos.x,pos.y,this.r,this.r);
    Pop();
}
 }
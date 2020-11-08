class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length : 250
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
       strokeWeight(3);
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}
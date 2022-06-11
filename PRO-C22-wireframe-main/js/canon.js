class Cannon {
    constructor(x,y,w,h,angle){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.cannonImg=loadImage("/assets/canon.png");
        this.cannonBaseImg=loadImage("/assets/cannonBase.png");
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.cannonImg,this.x,this.y,this.w,this.h,this.angle);
        pop();
        image(this.cannonBaseImg,70,20,200,200);
        noFill();
    }
    
}
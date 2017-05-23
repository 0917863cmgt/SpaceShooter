class Laser {
    public direction: number;
    private div : HTMLElement;
    private parent : HTMLElement;
    private speed : number;
    private x : number;
    private y : number;
    constructor(){
        this.div = document.createElement("laser");
        this.parent = document.getElementById("container");
        this.parent.appendChild(this.div);
        this.speed = 6;

    }

    public draw():void{
        switch (this.direction){
            case 0:
            this.y +=this.speed;
            break;
            case 90:
            this.x += this.speed
            break;
            case 180:
             this.y -=this.speed;
            break;
            case 270:
            this.x -= this.speed;
            break;
            case 360:
            this.direction = 0;
            break;
            case -45:
            this.direction = 315;
            break;
            case 45:
            this.y +=0.5 * this.speed;
            this.x +=0.5 * this.speed;
            break;
            case 135:
            this.y -=0.5 * this.speed;
            this.x +=0.5 * this.speed;
            break;
            case 225:
            this.y -=0.5 * this.speed;
            this.x -=0.5 * this.speed;
            break;
            case 315:
            this.y +=0.5 * this.speed;
            this.x -=0.5 * this.speed;
            break;
            
        }
        console.log(this.direction);
        // if (this.direction > 90 && this.direction < 0){

        // }   else if (this.direction > 180 && this.direction < 90){

        // }   else if (this.direction > 180 && this.direction < 90){

        // }   else if (this.direction > 180 && this.direction < 90){

        // }   else if (this.direction == 360){
        //     this.direction = 0;
        // }
           
        
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
    
}
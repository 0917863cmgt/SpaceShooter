class Reverse implements Behaviour {
     car: Car;
    constructor(c:Car){
        this.car = c;
    }
    draw():void{
            
        while(this.car.speed > -8){
            this.car.speed -= 1;
        }
        this.car.x += this.car.speed;

    }
    onKeyDown(e: KeyboardEvent):void{
        
    }

    onKeyUp(a: KeyboardEvent):void{
        if(a.key == 's') {
            console.log("ka");
            while(this.car.speed < 2){
            this.car.speed += 1;      
                if(this.car.speed == 2){
                this.car.behaviour = new Driving(this.car); 
                }    
            }         
        }
    }

    onMouseClick(b: MouseEvent):void{

    }

}
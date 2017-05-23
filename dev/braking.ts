class Braking implements Behaviour {
     car: Car;
    constructor(c:Car){
        this.car = c;
    }
    draw():void{
        
        while(this.car.speed > 0){
            this.car.speed -= 0.1;
            
        }
        this.car.x += this.car.speed;

    }
    onKeyDown(e: KeyboardEvent):void{
            if(e.key == 'a') {
            this.car.pivot -=45;
        }   else if(e.key == 'd') {
            this.car.pivot +=45;
        }
    }

    onKeyUp(a: KeyboardEvent):void{
        if(a.key == 'Shift') {
            while(this.car.speed < 2){
            this.car.speed += 0.1;      
                if(this.car.speed == 2){
                this.car.behaviour = new Driving(this.car); 
                }    
            }         
        }
    }

    onMouseClick(b: MouseEvent):void{

    }

}
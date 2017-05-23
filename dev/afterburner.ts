class Afterburner implements Behaviour {
     car: Car;
    constructor(c:Car){
        this.car = c;
    }
    draw():void{
        while(this.car.energy > 0){
            this.car.energy -= 1;
            this.car.speed += 1;
                
            
        }
        if(this.car.energy == 0 && this.car.speed > 2){
            this.car.behaviour = new Driving(this.car);  
            console.log("Ha");
        }
    
        this.car.x += this.car.speed;
    }
    onKeyDown(e: KeyboardEvent):void{
       
    }

    onKeyUp(a: KeyboardEvent):void{
        if(a.key == 'w') {
            this.car.behaviour = new Driving(this.car);      
        }
    }

    onMouseClick(b: MouseEvent):void{

    }

}
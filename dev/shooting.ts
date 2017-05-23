class Shooting implements Behaviour {
     car: Car;
    constructor(c:Car){
        this.car = c;
        this.car.lasers.push(new Laser);
        
        for (let g of this.car.lasers){
            g.draw();
            g.direction = this.car.pivot;
        }

        this.car.behaviour = new Driving(this.car);
    }
    draw():void{
        
        
    }
    onKeyDown(e: KeyboardEvent):void{
        
    }

    onKeyUp(a: KeyboardEvent):void{
        
    }

    onMouseClick(b: MouseEvent):void{

    }

}
class Engine implements Behaviour {
     car: Car;
    constructor(c:Car){
        this.car = c;
    }
    draw():void{
        this.car.speed = 0;
        
    }
    onKeyDown(e: KeyboardEvent):void{
        if(e.key == 'Control') {
            this.car.speed = 2;
            this.car.behaviour = new Driving(this.car);
        } else if(e.key == 'Meta') {
            this.car.speed = 2;
            this.car.behaviour = new Driving(this.car);
        }
    }

    onKeyUp(a: KeyboardEvent):void{
        
    }

    onMouseClick(b: MouseEvent):void{

    }

}
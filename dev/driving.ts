class Driving implements Behaviour {
    car: Car;
    constructor(c:Car){
        this.car = c;
    }
    draw():void {
         while(this.car.energy < 600){
            this.car.energy += 1;
        }
         while(this.car.speed > 2){
            this.car.speed -= 1;
        }

        this.car.x += this.car.speed;
    }

    onKeyDown(e: KeyboardEvent):void{
    
        if(e.key == ' ') {
            this.car.behaviour = new Jumping(this.car);
        } else if(e.key == 'Control') {
            this.car.behaviour = new Engine(this.car);
        }  else if(e.key == 'Shift') {
            this.car.behaviour = new Braking(this.car);
        }   else if(e.key == 'Meta') {
            this.car.behaviour = new Engine(this.car);
        }   else if(e.key == 'w') {
            this.car.behaviour = new Afterburner(this.car);
        }   else if(e.key == 's') {
            this.car.behaviour = new Reverse(this.car);
        }   else if(e.key == 'a') {
            this.car.pivot -=45;
        }   else if(e.key == 'd') {
            this.car.pivot +=45;
        }
        
    }

    onKeyUp(a: KeyboardEvent):void{

    }

    onMouseClick(b: MouseEvent):void{
        b.clientX

    }

}
class Crashing implements Behaviour {
     car: Car;
    private wheel1: Wheel;
    private wheel2: Wheel;
    constructor(c:Car){
        this.car = c;
        this.wheel1 = new Wheel(this.car.div, 20);
        this.wheel2 = new Wheel(this.car.div, 100);

    }
    draw(){
        this.wheel1.speed = -2;
            this.wheel2.speed = 2;
            this.car.div.classList.add("crashed");

            // gameOver functie van game aanroepen via singleton
            document.getElementById("plateau").classList.add("animationpaused");
            document.getElementById("sky").classList.add("animationpaused");    
        }

    onKeyDown(){
        
    }

    onKeyUp(a: KeyboardEvent):void{
        
    }

    onMouseClick(b: MouseEvent):void{

    }

}
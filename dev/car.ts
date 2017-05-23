/// <reference path="wheel.ts"/>

class Car {

    public lasers : Array<Laser>;
    public laser : Laser;
    public behaviour: Behaviour;
    public speed: number;
    public energy: number;
    public pivot: number;
    public direction: number;
    public div: HTMLElement;
    public x: number;
    public y: number;
    private wheel1: Wheel;
    private wheel2: Wheel;
    private jumpDirection: number;

    constructor(parent: HTMLElement) {
        this.div = document.createElement("car");
        parent.appendChild(this.div);

        // this.state = 1;
        this.speed = 2;
        this.energy = 0;
        this.pivot = 0;
        this.direction = 0;
        this.x = 0;
        this.y = 220;

        this.wheel1 = new Wheel(this.div, 20);
        this.wheel2 = new Wheel(this.div, 100);
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (a: KeyboardEvent) => this.onKeyUp(a));
        window.addEventListener("mousemove", (b: MouseEvent) => this.onMouseClick(b));
        this.behaviour = new Driving(this);
    }


    private onKeyDown(e: KeyboardEvent): void {
        this.behaviour.onKeyDown(e);
        console.log(this.pivot);
        // if(e.key == ' ' && this.state == 1) {
        //     this.state = 2;
        // } else if(e.key == 'Control' && this.state == 1) {
        //     this.state = 4;
        // }
    }

    private onKeyUp(a: KeyboardEvent): void {
        this.behaviour.onKeyUp(a);
    }
    private onMouseClick(b: MouseEvent): void {
        this.behaviour.onMouseClick(b);
        console.log(b);
    }

    public draw(): void {
        this.behaviour.draw();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px) rotate("+ this.pivot +"deg)";
        this.wheel1.draw();
        this.wheel2.draw();
        
    } 


}
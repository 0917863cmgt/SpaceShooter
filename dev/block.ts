class Block {

    public speed:number;
    public div:HTMLElement;
    public x:number;
    public y:number;
            
    constructor(parent:HTMLElement) {
        this.div = document.createElement("block");
        parent.appendChild(this.div);

        this.speed = 0;
        this.x = 400;
        this.y = 240;
    }

    public draw():void {
        this.x += this.speed;
        this.div.style.transform ="translate("+this.x+"px,"+this.y+"px)";
    }

}
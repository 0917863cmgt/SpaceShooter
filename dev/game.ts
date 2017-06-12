class Game {

    private car : Car;
    private block : Block;
    private static instance: Game;

    private constructor() {
        let container = document.getElementById("container");
        this.car = new Car(container);
        this.block = new Block(container);

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.car.draw();
        this.block.draw();
        requestAnimationFrame(() => this.gameLoop());
    }

    public gameOver(){
            document.getElementById("plateau").classList.add("animationpaused");
            document.getElementById("sky").classList.add("animationpaused");    
    }

      public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
} 

// load
window.addEventListener("load", function() {
    Game.getInstance();
});
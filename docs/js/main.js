var Afterburner = (function () {
    function Afterburner(c) {
        this.car = c;
    }
    Afterburner.prototype.draw = function () {
        while (this.car.energy > 0) {
            this.car.energy -= 1;
            this.car.speed += 1;
        }
        if (this.car.energy == 0 && this.car.speed > 2) {
            this.car.behaviour = new Driving(this.car);
            console.log("Ha");
        }
        this.car.x += this.car.speed;
    };
    Afterburner.prototype.onKeyDown = function (e) {
    };
    Afterburner.prototype.onKeyUp = function (a) {
        if (a.key == 'w') {
            this.car.behaviour = new Driving(this.car);
        }
    };
    Afterburner.prototype.onMouseClick = function (b) {
    };
    return Afterburner;
}());
var Block = (function () {
    function Block(parent) {
        this.div = document.createElement("block");
        parent.appendChild(this.div);
        this.speed = 0;
        this.x = 400;
        this.y = 240;
    }
    Block.prototype.draw = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Block;
}());
var Braking = (function () {
    function Braking(c) {
        this.car = c;
    }
    Braking.prototype.draw = function () {
        while (this.car.speed > 0) {
            this.car.speed -= 0.1;
        }
        this.car.x += this.car.speed;
    };
    Braking.prototype.onKeyDown = function (e) {
        if (e.key == 'a') {
            this.car.pivot -= 45;
        }
        else if (e.key == 'd') {
            this.car.pivot += 45;
        }
    };
    Braking.prototype.onKeyUp = function (a) {
        if (a.key == 'Shift') {
            while (this.car.speed < 2) {
                this.car.speed += 0.1;
                if (this.car.speed == 2) {
                    this.car.behaviour = new Driving(this.car);
                }
            }
        }
    };
    Braking.prototype.onMouseClick = function (b) {
    };
    return Braking;
}());
var Wheel = (function () {
    function Wheel(parent, offset) {
        this.div = document.createElement("wheel");
        parent.appendChild(this.div);
        this.x = offset;
        this.y = 30;
        this.speed = 0;
    }
    Wheel.prototype.draw = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Wheel;
}());
var Car = (function () {
    function Car(parent) {
        var _this = this;
        this.div = document.createElement("car");
        parent.appendChild(this.div);
        this.speed = 2;
        this.energy = 0;
        this.pivot = 0;
        this.direction = 0;
        this.x = 0;
        this.y = 220;
        this.wheel1 = new Wheel(this.div, 20);
        this.wheel2 = new Wheel(this.div, 100);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (a) { return _this.onKeyUp(a); });
        window.addEventListener("mousemove", function (b) { return _this.onMouseClick(b); });
        this.behaviour = new Driving(this);
    }
    Car.prototype.onKeyDown = function (e) {
        this.behaviour.onKeyDown(e);
        console.log(this.pivot);
    };
    Car.prototype.onKeyUp = function (a) {
        this.behaviour.onKeyUp(a);
    };
    Car.prototype.onMouseClick = function (b) {
        this.behaviour.onMouseClick(b);
        console.log(b);
    };
    Car.prototype.draw = function () {
        this.behaviour.draw();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px) rotate(" + this.pivot + "deg)";
        this.wheel1.draw();
        this.wheel2.draw();
    };
    return Car;
}());
var CarSwitch = (function () {
    function CarSwitch(parent) {
        var _this = this;
        this.div = document.createElement("car");
        parent.appendChild(this.div);
        this.state = 1;
        this.speed = 2;
        this.jumpDirection = -3;
        this.x = 0;
        this.y = 220;
        this.wheel1 = new Wheel(this.div, 20);
        this.wheel2 = new Wheel(this.div, 100);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    CarSwitch.prototype.onKeyDown = function (e) {
        if (this.state == 1) {
            this.state = 2;
        }
    };
    CarSwitch.prototype.draw = function () {
        switch (this.state) {
            case 1:
                this.driving();
                break;
            case 2:
                this.jumping();
                break;
            case 3:
                this.crashing();
                break;
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.wheel1.draw();
        this.wheel2.draw();
    };
    CarSwitch.prototype.driving = function () {
        this.x += this.speed;
    };
    CarSwitch.prototype.jumping = function () {
        this.x += this.speed;
        this.y += this.jumpDirection;
        if (this.y < 140)
            this.jumpDirection = 3;
        if (this.y > 217)
            this.state = 3;
    };
    CarSwitch.prototype.crashing = function () {
        this.wheel1.speed = -2;
        this.wheel2.speed = 2;
        this.div.classList.add("crashed");
        document.getElementById("plateau").classList.add("animationpaused");
        document.getElementById("sky").classList.add("animationpaused");
    };
    return CarSwitch;
}());
var Crashing = (function () {
    function Crashing(c) {
        this.car = c;
        this.wheel1 = new Wheel(this.car.div, 20);
        this.wheel2 = new Wheel(this.car.div, 100);
    }
    Crashing.prototype.draw = function () {
        this.wheel1.speed = -2;
        this.wheel2.speed = 2;
        this.car.div.classList.add("crashed");
        document.getElementById("plateau").classList.add("animationpaused");
        document.getElementById("sky").classList.add("animationpaused");
    };
    Crashing.prototype.onKeyDown = function () {
    };
    Crashing.prototype.onKeyUp = function (a) {
    };
    Crashing.prototype.onMouseClick = function (b) {
    };
    return Crashing;
}());
var Driving = (function () {
    function Driving(c) {
        this.car = c;
    }
    Driving.prototype.draw = function () {
        while (this.car.energy < 600) {
            this.car.energy += 1;
        }
        while (this.car.speed > 2) {
            this.car.speed -= 1;
        }
        this.car.x += this.car.speed;
    };
    Driving.prototype.onKeyDown = function (e) {
        if (e.key == ' ') {
            this.car.behaviour = new Jumping(this.car);
        }
        else if (e.key == 'Control') {
            this.car.behaviour = new Engine(this.car);
        }
        else if (e.key == 'Shift') {
            this.car.behaviour = new Braking(this.car);
        }
        else if (e.key == 'Meta') {
            this.car.behaviour = new Engine(this.car);
        }
        else if (e.key == 'w') {
            this.car.behaviour = new Afterburner(this.car);
        }
        else if (e.key == 's') {
            this.car.behaviour = new Reverse(this.car);
        }
        else if (e.key == 'a') {
            this.car.pivot -= 45;
        }
        else if (e.key == 'd') {
            this.car.pivot += 45;
        }
    };
    Driving.prototype.onKeyUp = function (a) {
    };
    Driving.prototype.onMouseClick = function (b) {
        b.clientX;
    };
    return Driving;
}());
var Engine = (function () {
    function Engine(c) {
        this.car = c;
    }
    Engine.prototype.draw = function () {
        this.car.speed = 0;
    };
    Engine.prototype.onKeyDown = function (e) {
        if (e.key == 'Control') {
            this.car.speed = 2;
            this.car.behaviour = new Driving(this.car);
        }
        else if (e.key == 'Meta') {
            this.car.speed = 2;
            this.car.behaviour = new Driving(this.car);
        }
    };
    Engine.prototype.onKeyUp = function (a) {
    };
    Engine.prototype.onMouseClick = function (b) {
    };
    return Engine;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.car = new Car(container);
        this.block = new Block(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.draw();
        this.block.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Jumping = (function () {
    function Jumping(c) {
        this.car = c;
        this.jumpDirection = -3;
    }
    Jumping.prototype.draw = function () {
        this.car.x += this.car.speed;
        this.car.y += this.jumpDirection;
        if (this.car.y < 140)
            this.jumpDirection = 3;
        if (this.car.y > 217) {
            this.car.behaviour = new Crashing(this.car);
        }
    };
    Jumping.prototype.onKeyDown = function () {
    };
    Jumping.prototype.onKeyUp = function (a) {
    };
    Jumping.prototype.onMouseClick = function (b) {
    };
    return Jumping;
}());
var Laser = (function () {
    function Laser() {
        this.div = document.createElement("laser");
        this.parent = document.getElementById("container");
        this.parent.appendChild(this.div);
        this.speed = 6;
    }
    Laser.prototype.draw = function () {
        switch (this.direction) {
            case 0:
                this.y += this.speed;
                break;
            case 90:
                this.x += this.speed;
                break;
            case 180:
                this.y -= this.speed;
                break;
            case 270:
                this.x -= this.speed;
                break;
            case 360:
                this.direction = 0;
                break;
            case -45:
                this.direction = 315;
                break;
            case 45:
                this.y += 0.5 * this.speed;
                this.x += 0.5 * this.speed;
                break;
            case 135:
                this.y -= 0.5 * this.speed;
                this.x += 0.5 * this.speed;
                break;
            case 225:
                this.y -= 0.5 * this.speed;
                this.x -= 0.5 * this.speed;
                break;
            case 315:
                this.y += 0.5 * this.speed;
                this.x -= 0.5 * this.speed;
                break;
        }
        console.log(this.direction);
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Laser;
}());
var Pivot = (function () {
    function Pivot(c) {
        this.car = c;
    }
    Pivot.prototype.draw = function () {
    };
    Pivot.prototype.onKeyDown = function (e) {
    };
    Pivot.prototype.onKeyUp = function (a) {
    };
    Pivot.prototype.onMouseClick = function (b) {
    };
    return Pivot;
}());
var Reverse = (function () {
    function Reverse(c) {
        this.car = c;
    }
    Reverse.prototype.draw = function () {
        while (this.car.speed > -8) {
            this.car.speed -= 1;
        }
        this.car.x += this.car.speed;
    };
    Reverse.prototype.onKeyDown = function (e) {
    };
    Reverse.prototype.onKeyUp = function (a) {
        if (a.key == 's') {
            console.log("ka");
            while (this.car.speed < 2) {
                this.car.speed += 1;
                if (this.car.speed == 2) {
                    this.car.behaviour = new Driving(this.car);
                }
            }
        }
    };
    Reverse.prototype.onMouseClick = function (b) {
    };
    return Reverse;
}());
var Shooting = (function () {
    function Shooting(c) {
        this.car = c;
        this.car.lasers.push(new Laser);
        for (var _i = 0, _a = this.car.lasers; _i < _a.length; _i++) {
            var g = _a[_i];
            g.draw();
            g.direction = this.car.pivot;
        }
        this.car.behaviour = new Driving(this.car);
    }
    Shooting.prototype.draw = function () {
    };
    Shooting.prototype.onKeyDown = function (e) {
    };
    Shooting.prototype.onKeyUp = function (a) {
    };
    Shooting.prototype.onMouseClick = function (b) {
    };
    return Shooting;
}());
//# sourceMappingURL=main.js.map
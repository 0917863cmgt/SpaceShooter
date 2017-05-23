interface Behaviour {
    car:Car;
    draw() :void;
    onKeyDown(e: KeyboardEvent):void;
    onKeyUp(a: KeyboardEvent):void;
    onMouseClick(b: MouseEvent):void
}
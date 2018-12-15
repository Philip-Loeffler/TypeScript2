var Point = /** @class */ (function () {
    // constructor calling on x and y having two params
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // in typescript you can only have one constructor
        // so you can make params optional
        // constructor (x?: number, y?: number) {}
    }
    Point.prototype.draw = function () {
        console.log('x:' + this.x + 'y:' + this.y);
    };
    return Point;
}());
// new instance of point filling in 2 arguments 
var point = new Point(1, 2);
point.draw();

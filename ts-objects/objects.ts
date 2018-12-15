class Point {
    x: number;
    y: number;

    draw() {
        console.log('x:' + this.x + ',y:' + this.y);
    }
    
    getDistance(another:Point) {


    }
}

// this point is an object
// an instance of this class 
let point: Point = new Point();
point.x = 1;
point.y = 2;
point.draw();
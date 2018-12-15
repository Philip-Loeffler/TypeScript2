class Point {
    x: number; 
    y: number; 

    // constructor calling on x and y having two params
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y; 
    

        // in typescript you can only have one constructor
        // so you can make params optional
        // constructor (x?: number, y?: number) {}
    }


    draw() {
        console.log('x:' + this.x + 'y:' + this.y);

        }

    }
    // new instance of point filling in 2 arguments 
    let point = new Point(1, 2);
    point.draw();
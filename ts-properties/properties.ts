class Point {

    constructor(private _X?: number, private _Y?: number) {
}

    draw() {
        console.log('x;' + this._X+ 'y:' + this._Y)
    }

    get X() {
        return this._X; 
    }

    set X(value) {
        if (value <0)
        throw new Error('value cannot be lower than 0')

        this._X = value;
    }
}

let point = new Point (1, 2);
let x = point.X;
point.X =10;
point.draw();
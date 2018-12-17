class Point {
  
    //access modifier in constructor
    constructor(private x?: number, private y?: number) {
    //takes away assigning this.x = x; 
 }

    // public is assumed but you could have 
     public draw() {
        console.log('x:' + this.x + 'y:' + this.y);

        }

    }
    
    let point = new Point(1, 2);
  // cant do it because x is private point.x =3;
    point.draw();
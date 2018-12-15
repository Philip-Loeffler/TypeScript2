interface Point {
    x: number, 
    y: number
}

let drawPoint = (point: Point) => {

//inline annotations 
//let drawPoint = (point: {x: number, y: number}) => {
    //..

}
    drawPoint({
        x: 1,
        y: 2
    })
var number = 1;
var count = 2;
function doSomething() {
    // "i" is scoped to the nearest function
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally:' + i);
}
doSomething();
function doSomethingElse() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // by using let = "i" is scoped to the nearest block
    console.log("finally:" + i);
}
doSomethingElse();

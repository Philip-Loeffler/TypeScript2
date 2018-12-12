// all the same. => is just a way to define functions
var log = function (message) {
    console.log(message);
};
var doLog = function (message) {
    console.log(message);
};
var doLog2 = function (message) { return console.log(message); };

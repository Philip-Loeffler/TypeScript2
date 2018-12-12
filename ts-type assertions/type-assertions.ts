// by doing this variable message first is set to any
// but by putting the <> in letting it know it is a string
// you've done type assertions 
let message ;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');

//same thing as the top
let alternativeWay = (message as string).endsWith('c');



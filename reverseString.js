const string = 'perro';
var secondString = ''

for (var i = string.length; i > 0; i--){
    secondString = secondString + string.charAt(i-1);
}

console.log(secondString)
const number = 154
var result = 0;
var array = number.toString().split('').map(Number)

for (const numbers of array){
    result += Math.pow(numbers, array.length)
    console.log(result)
}


if (result === number){
    console.log(`El numero: ${number} si es un numero de Armstrong`)
} else {
    console.log(`El numero: ${number} no es un numero de Armstrong`)
}




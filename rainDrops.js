const numer = 34;
let cadena = '';

if (numer % 3 === 0) cadena += 'PLING';
if (numer % 5 === 0) cadena += 'PLANG';
if (numer % 7 === 0) cadena += 'PLONG';

if (cadena === '') cadena = numer.toString();

console.log(cadena);
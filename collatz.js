let num = 401450;
let steps = 0;

while (num !== 1) {
  num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  console.log(num);
  steps++;
}

console.log(`Total de pasos: ${steps}`);
const isogram = 'lumberjacks';
let mapa = new Map();

for (let letra of isogram) {
  if (mapa.has(letra)) {
    mapa.set(letra, mapa.get(letra) + 1);
  } else {
    mapa.set(letra, 1);
  }
}

if (mapa.size < isogram.length) {
  console.log(isogram, "is not an isogram");
} else {
  console.log(isogram, "is an isogram");
}

console.log(mapa);
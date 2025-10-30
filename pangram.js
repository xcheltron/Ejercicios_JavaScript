var pangram = 'The quick brown fox jumps over the lazy dog.';

let mapa = new Map;

pangram = pangram.toLowerCase();
pangram = pangram.replace(/\s/g, '');
pangram = pangram.replace(/\./g,'');
pangram = pangram.replace(/\d/g,'');

for (let letra of pangram){
    if(!mapa.has(letra)){
        mapa.set(letra, 1)
    }
}

if(mapa.size === 26){
    console.log("si es un pangram")
}else{
    console.log("no es un pangram")
}


console.log(pangram)
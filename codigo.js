let array = ["sal", "harina", "cebolla", "agua", "oregano", "aceite", "aceitunas", "azucar", "queso", "tomate"];
let pares = [];
let impares = [];

for(let i = 0; i < array.length; i++) {
    if(i % 2 === 0) {
        pares.push(array[i]);
    }
    else{
        impares.push(array[i]);
    }
}

console.log(`Los ingredientes pares son ${pares}`);
console.log(`Los ingredientes impares son ${impares}`);
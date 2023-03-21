var randomPick = (n, min, max) => {
    numerosAleatorios = [];

    do {
        const range = max - min + 1;
        var numero = Math.floor((Math.random() * range)) + min;
        if(!numerosAleatorios.includes(numero)) {
            numerosAleatorios.push(numero)
            } 
    } while (numerosAleatorios.length < n);
    return numerosAleatorios;
 }

console.log(randomPick(10, 1, 100));
console.log(randomPick(6, 1, 49)); // Apuesta automática de la primitiva
console.log(randomPick(15, 1, 15)); // Escoge combinación de bolas de billar
console.log(randomPick(1, 1, 6)); // Tirada aleatoria de un dado
    
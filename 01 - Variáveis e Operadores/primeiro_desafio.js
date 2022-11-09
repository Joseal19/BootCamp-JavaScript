// Faça um programa para calcular o valor de uma viagem.

// Você tera três variaveis. Sendo elas :
//  1 - Preço do combustivel
//  2 - Gasto medio de combustiel do carro por KM
//  3 - Distancia em KM;


let precoComb = 5.79;
let gastoKmLitros = 12;
let distanciaKm = 1580;

let litrosGastos = distanciaKm / gastoKmLitros;
let gastoTotal = litrosGastos * precoComb;

console.log(gastoTotal.toFixed(2));
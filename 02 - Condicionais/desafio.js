// Faça um Programa para calcular o valor de uma viagem.

// Voce tera 5 variaveis, sendo elas:

//  1 - Preco do etanol;
//  2 - Preco do gasolina;
//  3 - Tipo de combustivel que esta no seu carro;
//  4 - Gasto medio de combustivel de carro por KM;
//  5 - Distancia em KM da viagem;

//  Imprima no console o valor que sera gasto para realizar esta viagem.
  
  let precoEtano = 5;
  let precoGasolina = 7;
  let tipoCombustivel = 'gasolina';
  let gastoMedioKm = 10;
  let distanciaViagemKm = 300;
  
  let resultKmMedio = distanciaViagemKm / gastoMedioKm;

  if(tipoCombustivel === 'etanol'){
    console.log('Sera gasto o valor de R$', (resultKmMedio * precoEtano).toFixed(2))
  }else{
    console.log('Sera gasto o valor de R$', (resultKmMedio * precoGasolina).toFixed(2))
  }
function incrementarJuro(valor, percentualJuros){
  const valorDeAcrescimo = (percentualJuros / 100) * valor
  return valor + valorDeAcrescimo;
}

console.log(incrementarJuro(100, 10))
console.log(incrementarJuro(100, 1))


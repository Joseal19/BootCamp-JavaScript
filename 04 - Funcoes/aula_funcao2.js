function mostrarNome(nome){
  return ("Meu nome é:" + nome);
}


function mostrarMaiorDeIdade(idade){
  if(idade >= 18){
    return console.log(mostrarNome('Jose') + "Você é maior de idade");
  }else{
    return console.log(mostrarNome('Jose') + "Você é menor de idade");
  }
}
mostrarMaiorDeIdade(18);
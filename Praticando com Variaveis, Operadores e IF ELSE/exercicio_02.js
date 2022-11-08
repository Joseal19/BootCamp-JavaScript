// O IMC - Indice de Massa Corporal é um criterio da Organização Mundial de Saude para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
// A fórmula é IMC = peso / (altura * altura).

// Faça um algoritmo que receba peso e altura do usuario e calcule o IMC dele e imprima a classificação de acordo com a tabela abaixo:

// IMC	Classificação
// Menor que 18,5	Abaixo do Peso;
// Entre 18,5 e 25	Peso normal;
// Entre 25 e 30  Acima do Peso;
// Entre 30 e 40	Obesidade;
// Maior que 40	Obesidade grave;


let peso = 75;
let altura = 1.70

let imc = peso / (altura * altura);

if(imc < 18.5){
  console.log("IMC = ",imc.toFixed(2) ,"Você esta abaixo do peso.");
}else if(imc >= 18.5 && imc < 25){
  console.log("IMC = ",imc.toFixed(2) ,"Você esta com o Peso Normal.");
}else if(imc >= 25 && imc < 30){
  console.log("IMC = ",imc.toFixed(2) ,"Você esta acima do Peso.");
}else if(imc >= 30 && imc < 40){
  console.log("IMC = ",imc.toFixed(2) ,"Você esta com obesidade.");
}else if(imc > 40){
  console.log("IMC = ",imc.toFixed(2) ,"Você esta com obesidade grave.");
}
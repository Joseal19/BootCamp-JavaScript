// Elabore um algoritmo que calcule oque deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento
// 1 À vista debito, recebe 10% de desconto
// 2 À vista no dinheiro ou pix, recebe 15% de desconto
// 3 Em duas vezes, preço normal de etiqueta sem juros
// 4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%

let precoEtiqueta = 100;
let escolhaPagamento = 4;


if(escolhaPagamento == 1){
  console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}else if(escolhaPagamento == 2){
  console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}else if(escolhaPagamento == 3){
  console.log(precoEtiqueta);
}else if(escolhaPagamento == 4){
  console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
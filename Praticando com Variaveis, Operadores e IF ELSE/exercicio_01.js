// faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua classificação conforme a tabela abaixo.

// Media = (nota1 + nota2 + nota3) / 3;

// Classificação:
//  - Media menor que 5, reprovação;
//  - MEdia entre 5 e 7, recuperação;
//  - Media acima de 7, passo de semestre;

let nota1 = 5;
let nota2 = 2;
let nota3 = 7;

let media;

media  = (nota1 + nota2 + nota3) / 3;

if(media < 5){
  console.log(media, 'Reprovado');
}else if(media >= 5 && media <= 7){
  console.log(media, 'Recuperação');
}else if(media > 7){
  console.log(media, 'Passou de semestre');
}
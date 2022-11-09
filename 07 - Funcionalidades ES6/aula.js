const alunos = [
  {
    nome: 'José',
    idade: '20'
  },
  {
    nome: 'Pablo',
    idade: '25'
  },
  {
    nome: 'Roberto',
    idade: '9'
  },
];

const alunosFiltrados = alunos.filter(aluno => aluno.idade >= 18)
console.table( alunosFiltrados)

// retorna o array que esta a condição
const alunoRoberto = alunos.find(aluno => aluno.nome == 'Roberto');
console.log(alunoRoberto);

// restorna a posicao usando o findIndex
const alunoRobertoPosicao = alunos.findIndex(aluno => aluno.nome == 'Roberto');
console.log(alunoRobertoPosicao);

// soma as idades ou oque pedir
const idades = alunos.reduce((acc, aluno) => {
  return acc + aluno.idade;
}, 0);
console.log(idades);

// mostra 
const idades2 = alunos.some(alunos => alunos.idade < 10);
console.log(idades2);

// so retorna true quando todas forem vdd
const idades3 = alunos.every(alunos => alunos.idade < 90);
console.log(idades3);


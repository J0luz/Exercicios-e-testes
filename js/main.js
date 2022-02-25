let vet = [
  { nome: 'alice', idade: 19 },
  { nome: 'amanda', idade: 23 },
  { nome: 'abobora', idade: 33 },
  { nome: 'Jumunda', idade: 54 },
  { nome: 'Joana', idade: 65 },
  { nome: 'Janaina', idade: 53 },
  { nome: 'Joelma', idade: 23 },
  { nome: 'Jurema', idade: 78 },
  { nome: 'Jorja', idade: 87 },
  { nome: 'Jucelia', idade: 12 }
]

function geraVetor() {
  for (let chave of vet) {
    console.log(chave)
  }
}

let idade = vet.sort(function (x, y) {
  return x.idade - y.idade
})
let nome = vet.sort(function (a, b) {
  if (a.nome < b.nome) return 1
  if (a.nome > b.nome) return -1
  if (a.nome === b.nome) return 0
})
console.log(nome)
function menorMaior (){
  vet.
}
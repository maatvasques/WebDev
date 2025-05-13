// repetiçao
// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// repetição mas faz pelo menos uma vez

// let a = 0

// do{
//     resposta = prompt("Digite um numero")
// }
// while (isNaN(resposta))


// let numero = prompt("Escolha um numero")

// while (numero >= 1) {
//     alert(numero)
//     numero--
// }

// i-- é para diminuir

// let num = prompt("Fale seu numero")

// for (i = 1; i <= 10; i++) {
//     tabuada = num * i
//     alert(tabuada)
// }
//               0          1      2    3
let alunos = ['Fulano', 'Ciclano', 'aa', 'aaa']
alunos[1] = 'Matheus'
console.log(alunos[1])

//alunos.push("Matheus") adiciona no final do Array(lista)
//alunos.unshift("Matheus") adiciona no comeco do array
//alunos.pop() remove o ultimo item do array
//alunos.shift() remove o primeiro item do array
//alunos.splice(1,3) remove do primeiro até o terceiro item do array o 1 é onde omeca e o 3 e onde termina
//alunos.concat(['Aluno 2', 'Aluno 3'])junta 2 ou mais arrays
//alunos.indexOf("Fulano") Retorna a posição do item, então retornaria 0, -1 é no caso de não achar esse item
//alunos.include("Matheus")Ele apenas checa se existe no array, retornando ou True ou False
const arrayModificado = alunos.map(function (item, index) {
    console.log(item.toUpperCase())
})
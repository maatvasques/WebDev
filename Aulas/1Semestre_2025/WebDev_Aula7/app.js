/* function pegaNome() {
     console.log("Mensagem!")
    let nome = "Matheus"
    return nome
}
 let resultado = exibirNome()
console.log(resultado) 

function exibirNome() {
    let resultado = pegaNome()
    console.log(resultado)
}

exibirNome() 
----------------------------------------------------------------------------

function somaNumeros(numero1, numero2 = 0){

    let resultado = numero1 + numero2
    console.log (resultado)
     return numero1 + numero2

}

somaNumeros(5, 19) 

----------------------------------------------------------------------------

 function pegaNome() {
    let nome = prompt("Digite seu Nome:")
    return nome
}

function pegaIdade() {
    let idade = prompt("Digite sua idade:")
    return idade
}

function juntaOsDois(nome, idade) {
    let frase = alert(`Ola ${nome}, tudo bem? Você tem ${idade} anos`)
    return frase
}

function iniciar() {
    let nome = pegaNome()
    let idade = pegaIdade()
    juntaOsDois(nome, idade)
}

iniciar()
----------------------------------------------------------------------------



let nome = "Matheus"

console.log(nome.length)
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.includes("M"))
console.log(nome.trim())

let numero = 5.5544484

console.log(numero.toFixed(5))
console.log(isNaN(numero))

----------------------------------------------------------------------------

Math.random gera um numero aleatorio menor do que 1
Math.ceil para arredondar para cima, 
e Math.floor para arredondar para baixo
Math.round para arredondar normal
console.log(Math.ceil(Math.random()*10))


let dataAtual = new Date()
console.log(dataAtual) */


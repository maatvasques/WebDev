// const btnClicar = document.getElementById('btnClicar')
// const paragrafo = document.getElementById('paragrafo')


// btnClicar.addEventListener('click', function () {
//     paragrafo.textContent = 'Corinthians ruim'
// })

const form = document.getElementById('form')
const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputAssunto = document.getElementById('assunto')
const inputMensagem = document.getElementById('mensagem')
const btnEnviar = document.getElementById('btnEnviar')
const mensagemErro = document.getElementById('mensagem-erro')
const cadastroUsuarios = document.getElementById('cadastroUsuarios')

btnEnviar.addEventListener('click', function (event) {
    event.preventDefault()

    const nome = inputNome.value
    const email = inputEmail.value

    if (nome === '' || email == '') {
        mensagemErro.textContent = 'Preencha os campos vazios'
        mensagemErro.style.color = 'red'
        // mensagemErro.classList.add('MensagemAlerta')
        // mensagemErro.src = 'fds'

        return
    }

    let cardUsuario = document.createElement('div')
    cardUsuario.innerHTML = `
    <h3> Nome: ${nome} </h3>
    <p> E-mail; ${email} </p>
    `

    cadastroUsuarios.append(cardUsuario)

    form.reset()
})




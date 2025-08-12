// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        image: "https://placedog.net/150?random=3",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function(){
    mostrarPosts()

    document.querySelector('#postForm').addEventListener('submit', criarPost)
}

// const pessoa = {
//     nome: 'Matheus',
//     idade: 18,
//     cidade: 'São Paulo',
//     "cidade Natal": 'São Paulo'

// }

// console.log(pessoa.cidade)
// console.log(pessoa[nome])

//CREATE

function criarPost(infosDoEvento){
    //previne que o formulario seja enviado antes de pegarmos as infos
    infosDoEvento.preventDefaukt();
    //Pega os valores digitados pelo usuario
    const textoPost= document.querySelector('#postText').value;
    const categoriaPost= document.querySelector('#postCategory').value;
    const imagemPost= document.querySelector('#postImage').value;
    const dataPost = new Date().toLocaleString
    //Cria um novo objeto de post
    const post = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: dataPost
    }
    //Add no primeiro item do array
    posts.unshift(post)
    
    mostrarPosts();
}
//READ
function mostrarPosts(){
    const listaPosts = document.querySelector("#postList")
    listaPosts.innerHTML = ''

    posts.forEach(pegaItem => {
        const cardPost = document.createElement('div')
        cardPost.classList.add('card')
        
        cardPost.innerHTML = `
        <p>${pegaItem.text}</p>
        <img src='${pegaItem.image}' style='max-width: 150px' />
        <p>${pegaItem.category}</p>
        <p>${pegaItem.date}</p>
        <button>Editar</button>
        <button>Apagar</button>
        `
        listaPosts.append(cardPost)
    })

}
//UPDATE
//DELETE
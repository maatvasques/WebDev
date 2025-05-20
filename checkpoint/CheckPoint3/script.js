const produtos = [
    { nome: 'Camiseta Algodão', preco: 25.99, categoria: 'Vestuário', disponibilidade: true },
    { nome: 'Calça Jeans', preco: 79.50, categoria: 'Vestuário', disponibilidade: true },
    { nome: 'Tênis Corrida', preco: 120.00, categoria: 'Calçados', disponibilidade: true },
    { nome: 'Sandália Verão', preco: 45.00, categoria: 'Calçados', disponibilidade: true },
    { nome: 'Livro "Aventuras"', preco: 19.90, categoria: 'Livros', disponibilidade: true },
    { nome: 'Caderno Espiral', preco: 5.50, categoria: 'Papelaria', disponibilidade: true },
    { nome: 'Mochila Grande', preco: 89.99, categoria: 'Acessórios', disponibilidade: true },
    { nome: 'Boné Aba Reta', preco: 35.00, categoria: 'Acessórios', disponibilidade: false },
    { nome: 'Caneta Esferográfica', preco: 1.20, categoria: 'Papelaria', disponibilidade: true },
    { nome: 'Romance "Amor Eterno"', preco: 29.99, categoria: 'Livros', disponibilidade: false },
    { nome: 'Blusa Moletom', preco: 65.00, categoria: 'Vestuário', disponibilidade: true },
    { nome: 'Chuteira Campo', preco: 95.00, categoria: 'Calçados', disponibilidade: false }
];

const listaProdutos = document.getElementById('listaProdutos');
const filtroCategoria = document.getElementById('filtroCategoria');
const filtroDisponibilidade = document.getElementById('filtroDisponibilidade');
const botaoFiltrar = document.getElementById('filtrar');
const botaoListarTodos = document.getElementById('listarTodos');

function exibirProduto(produto) {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto');
    produtoDiv.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
      <p>Categoria: ${produto.categoria}</p>
      <p>Disponibilidade: ${produto.disponibilidade ? 'Disponível' : 'Indisponível'}</p>
    `;

    produtoDiv.addEventListener('mouseover', () => {
        produtoDiv.style.border = '2px solid blue';
        produtoDiv.style.backgroundColor = '#cccccc';
    });

    produtoDiv.addEventListener('mouseout', () => {
        produtoDiv.style.border = '';
        produtoDiv.style.backgroundColor = '';
    });

    listaProdutos.appendChild(produtoDiv);
}

function listarTodosProdutos() {
    listaProdutos.innerHTML = ''; // Limpa a lista anterior
    produtos.forEach(exibirProduto);
}

function filtrarProdutos() {
    listaProdutos.innerHTML = ''; // Limpa a lista anterior
    const categoriaSelecionada = filtroCategoria.value;
    const somenteDisponiveis = filtroDisponibilidade.checked;

    const produtosFiltrados = produtos.filter(produto => {
        const filtroCategoriaAtivo = categoriaSelecionada !== 'todos';
        const correspondeCategoria = !filtroCategoriaAtivo || produto.categoria === categoriaSelecionada;
        const correspondeDisponibilidade = !somenteDisponiveis || produto.disponibilidade;
        return correspondeCategoria && correspondeDisponibilidade;
    });

    if (produtosFiltrados.length === 0) {
        listaProdutos.textContent = 'Nenhum produto encontrado com os filtros selecionados.';
    } else {
        produtosFiltrados.forEach(exibirProduto);
    }
}

// Adiciona as opções de categoria ao select
const categoriasUnicas = ['todos', ...new Set(produtos.map(produto => produto.categoria))];
categoriasUnicas.forEach(categoria => {
    const option = document.createElement('option');
    option.value = categoria;
    option.textContent = categoria === 'todos' ? 'Todas as Categorias' : categoria;
    filtroCategoria.appendChild(option);
});

botaoListarTodos.addEventListener('click', listarTodosProdutos);
botaoFiltrar.addEventListener('click', filtrarProdutos);
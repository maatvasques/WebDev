function executarPush() {
  const array = ['🍎', '🍌'];
  array.push("🍇"); //adicionado, .push add no array
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop(); //remove o ultimo item do array
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift(); //remove o primeiro item do array
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift('🍎'); //adiciona no primeiro item
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes('🥝 '); //pergunta se inclui o elemento, retorna true ou false
  document.getElementById('resultado-includes').textContent = resultado;
}

function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.reverse();// inverte os items do array
  document.getElementById('resultado-reverse').textContent = resultado;
}

function executarSort() {
  // a - b garante que o maior numero ira para tras do menor numero, b - a inverte 
  //             1  2  1  2  1, reconhecido pela function(a,b)
  const array = [3, 1, 4, 2, 11]
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  const resultado = array.sort(function(a,b){ return a - b});
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort().reverse();
  document.getElementById('resultado-sort2').textContent = resultado2;
  //sort() ordena por ordem alfabetica e crescente,
  //coloando .reverse depois do sort inverte a ordem.
  //
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array.slice(1, 3);
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  array.splice(2,1) //a partir da segunda posicao, ira remover 1 item
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.indexOf('🍇');//encontrar indice no array
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.join("-");// muda o que tem entre os espacamentos dos items do array
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.forEach((pegaItem, index) => console.log(`O item ${index + 1} é o ${pegaItem}`));
  document.getElementById('resultado-foreach').textContent = resultado;
}

function executarMap() {
  // map passa por todos os items do array e adiciona alguma coisa
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map(pegaItem => `✅ ${pegaItem}`);
  document.getElementById('resultado-map').textContent = resultado;
}

 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map(pegaitem => 
    `<h1>Item em promoção</h1>
    <span> ${pegaitem} </span>`);
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter(pegaItem => pegaItem === "🍎");
  document.getElementById('resultado-filter').textContent = resultado;
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find(pegaitem => pegaitem === '🍇');
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.findIndex(pegaitem => pegaitem === '🍇');
  document.getElementById('resultado-findIndex').textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((total, valorAtual)=>
     total + valorAtual, 0);
 document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}


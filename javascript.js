// aqui eu defini a quantidade de produtos
let quantidade = 10;

// aqui eu coloquei o preço de cada produto
let precoUnitario = 22.59;

// aqui eu calculei o total multiplicando quantidade pelo preço
let total = quantidade * precoUnitario;

// aqui eu mostro no console a quantidade
console.log("Quantidade: " + quantidade);

// aqui eu mostro o preço unitário
console.log("Preço Unitario do produto: " + precoUnitario);

// aqui eu mostro o preço total calculado
console.log("O preço total R$ " + total);


// ===== FORMA ANTIGA (SEM LAÇO) =====
// deixei comentado como referência (também funciona)

/*
function mudarCorDaPagina() {

  // muda o fundo da página para azul claro
  document.body.style.backgroundColor = "lightblue";

  // aqui eu mudava manualmente cada h1
  document.getElementById("titulo").style.fontSize = "40px";
  document.getElementById("subtitulo").style.fontSize = "40px";
}

function resetarCor() {

  // volta a cor de fundo para branco
  document.body.style.backgroundColor = "white";

  // aqui eu voltava manualmente cada h1
  document.getElementById("titulo").style.fontSize = "32px";
  document.getElementById("subtitulo").style.fontSize = "32px";
}
*/


// ===== FORMA NOVA (COM LAÇO - AUTOMÁTICO) =====

// função que altera a cor da página e aumenta os títulos
function mudarCorDaPagina() {

  // muda o fundo da página para azul claro
  document.body.style.backgroundColor = "lightblue";

  // pega todos os h1 da página (cria uma lista)
  let h1s = document.getElementsByTagName("h1");

  // percorre todos os h1 um por um
  for (let i = 0; i < h1s.length; i++) {

    // aqui eu aumento o tamanho da fonte de cada h1
    h1s[i].style.fontSize = "40px";
  }
}
  

// função que reseta tudo para o padrão
function resetarCor() {

  // volta a cor de fundo para branco
  document.body.style.backgroundColor = "white";

  // pega todos os h1 da página
  let h1s = document.getElementsByTagName("h1");

  // percorre todos e volta ao tamanho normal
  for (let i = 0; i < h1s.length; i++) {

    // aqui eu retorno o tamanho padrão
    h1s[i].style.fontSize = "32px";
  }
}
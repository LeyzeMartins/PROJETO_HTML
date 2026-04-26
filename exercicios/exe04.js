// função que altera o estilo do parágrafo
function mudarEstilo() {

  // aqui eu mudo o fundo do parágrafo para amarelo
  document.getElementById("paragrafo").style.backgroundColor = "yellow";

  // aqui eu mudo a cor do texto para vermelho
  document.getElementById("paragrafo").style.color = "red";

  // aqui eu aumento o tamanho da fonte
  document.getElementById("paragrafo").style.fontSize = "24px";
}

// função que volta o parágrafo para o estilo original
function voltarEstilo() {

  // aqui eu volto o fundo para branco
  document.getElementById("paragrafo").style.backgroundColor = "white";

  // aqui eu volto a cor do texto para preto
  document.getElementById("paragrafo").style.color = "black";

  // aqui eu volto o tamanho da fonte para o padrão
  document.getElementById("paragrafo").style.fontSize = "20px";
}
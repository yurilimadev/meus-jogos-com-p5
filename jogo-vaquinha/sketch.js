function setup() {
  createCanvas(windowWidth, windowHeight);
  //sons do jogo ficam em setup!
  somDaTrilha.loop();
  
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaJogador();
  voltaPosicaoInicialDoCarro();
  verificarColisao();
  incluiPontos();
  marcaPonto();
}




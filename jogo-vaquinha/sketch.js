function setup() {
  createCanvas(600, 400);
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




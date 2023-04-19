//CODIGO DO JOGADOR
//variaveis joga
let xJogador = -200;
let yJogador = 180;
let colisao = false;
let meusPontos = 0;

//Inicializando Jogador na Tela

function mostraAtor(){
  image(imagemJogador,xJogador, yJogador);
}


function movimentaJogador(){
  if (keyIsDown(UP_ARROW)){
    yJogador -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yJogador +=3;
  }
}

function verificarColisao(){
  for (let i = 0; i< imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i],yCarros[i], comprimentoCarro, alturaCarro, xJogador, yJogador, 30)
    if (colisao){
      colidiu();
    }
  }
}

function colidiu(){
  yJogador = 180;
  somDaColisao.play()
  meusPontos -= 1;
  if (meusPontos <= 0){
    meusPontos = 0;
  }
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(30,255,80));
  text(meusPontos, width/5, height-380);
}

function marcaPonto(){
  if (yJogador < -178){
    somDoPonto.play()
    yJogador = 180;
    meusPontos +=1;
  }
}
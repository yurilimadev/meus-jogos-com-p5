//CODIGO DO JOGADOR
//variaveis joga
let xJogador = 330;
let yJogador = 690;
let colisao = false;
let meusPontos = 0;

//Inicializando Jogador na Tela

function mostraAtor(){
  if(yJogador > 690){
    yJogador = 690;
  }
  image(imagemJogador,xJogador, yJogador);
}


function movimentaJogador(){
  if (keyIsDown(UP_ARROW)){
    yJogador -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yJogador +=10;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xJogador += 10;
  }
  if(keyIsDown(LEFT_ARROW)){
    xJogador -= 10;
  }
}

function verificarColisao(){
  for (let i = 0; i< imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i],yCarros[i], comprimentoCarro, alturaCarro, xJogador, yJogador, 50)
    if (colisao){
      colidiu();
    }
  }
}

function colidiu(){
  yJogador = 690;
  somDaColisao.play()
  meusPontos -= 1;
  if (meusPontos <= 0){
    meusPontos = 0;
  }
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  rect(740,10,60,40);
  fill(color(30,255,80));
  text(meusPontos, width-1085, height-890);
  fill(color(255,255,255));
}

function marcaPonto(){
  if (yJogador < -200){
    somDoPonto.play()
    yJogador = 690;
    meusPontos +=1;
  }
}
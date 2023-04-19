//Variaveis Bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

let raio = diametro / 2;

let colidiu = false;

// Variaveis Jogador
let xRaqueteJogador = 5;
let yRaqueteJogador = 150;
let jComprimento = 10;
let jAltura = 90;
let velocidadejogador = 1;

// Variaveis Oponente

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let oComprimento = 10;
let oAltura = 90;
let velocidadeOponente = 1;
let chanceDeErrar = 0;

// Placar
let meusPontos = 0;
let pontosOponente = 0;

//Sons do Jogo

let raquetada;
let ponto;
let trilha;

//Janela
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

// Main
function draw() {
  background(0);
  mostrarBolinha();
  movimentaBolinha();
  validacaoBolinha();
  mostrarJogador();
  mostrarOponente();
  moveJogador();
  //velocidadeYOponente();
  // verificaColisaoBolinha();
  movimentaRaqueteOponente()
  calculaChanceDeErrar();
  verificacaoColisaoJogador();
  verificacaoColisaoOponente();
  incluirPlacar();
  marcarPonto();
  bolinhaNaoFicaPresa();
}

// Funções
function mostrarJogador(){
  rect(xRaqueteJogador,yRaqueteJogador,jComprimento,jAltura);
  
}

function mostrarOponente(){
  rect(xRaqueteOponente,yRaqueteOponente,oComprimento,oAltura);
  
}

function moveJogador(){
  if (keyIsDown(UP_ARROW)) {
      yRaqueteJogador -= 10;
    }
  if (keyIsDown(DOWN_ARROW)) {
      yRaqueteJogador += 10;
    }
}


function mostrarBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function validacaoBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
      velocidadeXBolinha *= -1;
      }
  if (yBolinha + raio > height || yBolinha - raio <0){
    velocidadeYBolinha *= -1;
  }
}

function velocidadeYOponente(){
  if (keyIsDown(87)) {
      yRaqueteOponente -= 10;
    }
  if (keyIsDown(83)) {
      yRaqueteOponente += 10;
    }
}

function verificaColisaoBolinha(){
  if (xBolinha - raio < xRaqueteJogador + jComprimento && yBolinha - raio < yRaqueteJogador + jAltura && yBolinha +raio > yRaqueteJogador ){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificacaoColisaoJogador(){
  colidiu = collideRectCircle(xRaqueteJogador, yRaqueteJogador,jComprimento, jAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificacaoColisaoOponente(){
  colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente,oComprimento, oAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
    
  }
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(255, 102, 0);
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(255,102,0);
  rect(450,10,40,20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcarPonto(){
  if (xBolinha > 590) {
      meusPontos += 1;
      ponto.play();
      }
  if (xBolinha < 10) {
    pontosOponente +=1;
    ponto.play();
  }
}

function movimentaRaqueteOponente(){
  velocidadeOponente = yBolinha -yRaqueteOponente - oComprimento / 2 - 30;
  yRaqueteOponente += velocidadeOponente + chanceDeErrar
  calculaChanceDeErrar();
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
      xBolinha = 23
    }
    if (xBolinha + raio > 600){
      xBolinha = 580
    }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
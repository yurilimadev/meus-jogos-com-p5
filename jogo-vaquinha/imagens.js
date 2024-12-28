let imagemDaEstrada;
let imagemJogador;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload(){
  imagemDaEstrada = loadImage('fundo-jogo.png');
  imagemJogador = loadImage('imagens-do-jogo/2-removebg-preview.png');
  imagemCarro = loadImage('imagens-do-jogo/3-removebg-preview.png');
  imagemCarro2 = loadImage('imagens-do-jogo/4-removebg-preview.png');
  imagemCarro3 = loadImage('imagens-do-jogo/5-removebg-preview.png');
  imagemCarro4 = loadImage('imagens-do-jogo/6-removebg-preview.png');
  imagemCarro5 = loadImage('imagens-do-jogo/7-removebg-preview.png');
  imagemCarro6 = loadImage('imagens-do-jogo/8-removebg-preview.png');
  imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3, imagemCarro4,imagemCarro5, imagemCarro6, imagemCarro2, imagemCarro4, imagemCarro3, imagemCarro5];
  
  somDaTrilha = loadSound('sons-jogo/chum_drum_bedrum_loop.mp3');
  somDaColisao = loadSound('sons-jogo/vaca-mugindo.mp3');
  somDoPonto = loadSound('sons-jogo/sfx_point.mp3');
}
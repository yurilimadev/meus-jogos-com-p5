//código para carros
let xCarros = [400,400,400,400,400]
let yCarros = [-115,-55,5,65,125]
let comprimentoCarro = 0
let alturaCarro = 0
let velocidadeCarros = [2.3,3.3,3,2,5]


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length;i++){
    image(imagemCarros[i], xCarros[i],yCarros[i],0,0);
  }
}

function movimentaCarro(){
  for (let i = 0; i < velocidadeCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i<xCarros.length;i++){
      if (passouTodaATela(xCarros[i])){
      xCarros[i] = 400;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -450;
}
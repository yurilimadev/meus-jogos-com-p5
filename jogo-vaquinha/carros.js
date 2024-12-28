//código para carros
let xCarros = [1840,1840,1840,1840,1840,1840,1840,1840,1840,1840]
let yCarros = [-50,0,100,150,250,300,400,450,550,600]
let comprimentoCarro = 0
let alturaCarro = 0
let velocidadeCarros = [10,8,5,4,12,4,10,8,6,5]


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
      xCarros[i] = 1840;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -600;
}
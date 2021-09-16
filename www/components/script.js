// This is a JavaScript file
window.onload = function(){
  inicioJogo();

  document.querySelector("#esquerda").addEventListener("click", function(){
    esquerda();
  });

  document.querySelector("#subir").addEventListener("click", function(){
    subir();
  });

  document.querySelector("#descer").addEventListener("click", function(){
    descer();
  });

  document.querySelector("#direita").addEventListener("click", function(){
    direita();
  });
}

var personagemObj;

function inicioJogo(){
  areaJogo.start();
  personagemObj = new componente("#F00", 10, 120, 30, 30);
}

let areaJogo = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.height = 300,
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.intervalo = setInterval(atualizaAreaJogo, 20);
  },
  limpar: function(){
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
  }
}

function componente(cor, x, y, largura, altura){
  this.altura = altura,
  this.largura = largura,
  this.x = x,
  this.y = y,
  this.velocidadeX = 0;
  this.velocidadeY = 0;
  this.atualiza = function(){
  contexto = areaJogo.context;
  contexto.fillStyle = cor, 
  contexto.fillRect(this.x, this.y, this.altura, this.largura);
  },
  this.novaPosicao = function(){
    this.x += this.velocidadeX;
    this.y += this.velocidadeY;
  }
}

function atualizaAreaJogo(){
  areaJogo.limpar();
  personagemObj.novaPosicao();
  personagemObj.atualiza();
}

function subir(){
  personagemObj.velocidadeY -= 1;
}

function descer(){
  personagemObj.velocidadeY += 1;
}

function direita(){
  personagemObj.velocidadeX += 1;
}

function esquerda(){
  personagemObj.velocidadeX -= 1;
}
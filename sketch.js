//variáveis placar
let meuspontos = 0;
let oponentepontos = 0;
//variáveis oponente
let xoponente = 585;
let yoponente = 150;
let velocidadeYop;

//variáveis da raquete
let xraquete = 10;
let yraquete = 150;
let comprimento = 10;
let altura = 90;

//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2 ;

//variáveis da velocidade
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostrarRaquete(xraquete, yraquete);
  moverraquete();
  verificacolisaoraquete();
  mostrarRaquete(xoponente, yoponente);
  movimentaoponente();
  verificacolisaoraqueteoponente();
  placar();
  marcarponto();

}
function mostraBolinha(){ 
   circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
  
}
function verificaColisao(){
  if (xBolinha + raio > width || xBolinha - raio < 0)
    velocidadeXbolinha *= -1;
  if (yBolinha + raio > height || yBolinha - raio < 0)
    velocidadeYbolinha *= -1;
  
}
function mostrarRaquete(x, y){
    rect(x, y, comprimento, altura)
}

function moverraquete(){
  if (keyIsDown(UP_ARROW)){
  yraquete -= 10;
}
  if (keyIsDown(DOWN_ARROW)){
  yraquete += 10;   
}
  yraquete = constrain(yraquete, 10, 300);
}
function verificacolisaoraquete(){
  if (xBolinha - raio < xraquete + comprimento && yBolinha - raio < yraquete + altura && yBolinha + raio > yraquete ){ velocidadeXbolinha *= - 1;
    
  }
}
function movimentaoponente(){
  velocidadeYop = yBolinha - yoponente - comprimento /2 - 30;
  yoponente += velocidadeYop
  
}
function verificacolisaoraqueteoponente(){
  if (xBolinha + raio > xoponente - comprimento && yBolinha + raio < yoponente + altura && yBolinha + raio > yoponente ){ velocidadeXbolinha *= - 1; }                                       }                                                                          
function placar(){
stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0))
  rect(130,10, 40,20)
  fill(255);
  text(meuspontos, 150, 26);
  fill(color(255, 140, 0))
  rect(430,10, 40, 20)
  fill(255);
  text(oponentepontos, 450, 26)

}
function marcarponto(){
  if (xBolinha >590){meuspontos += 1;   
  }
  if (xBolinha <10){oponentepontos += 1;
                   }
}


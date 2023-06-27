//Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//Velocidade da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variaveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false;

//Variaveis do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Placar do Jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//Sons do Jogo
let raquetada;
let ponto;
let trilha;

//Errar
let chanceDeErrar = 0;

function setup() 
{
    createCanvas(600,400);
    trilha.loop();
}

//TELA

function draw() 
{
    background(70,130,180);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
}

// SONS
function preload() 
{
    trilha = loadSound("sounds/trilha.mp3");
    ponto = loadSound("sounds/ponto.mp3");
    raquetada = loadSound("sounds/raquetada.mp3");
}

// BOLINHA
function mostraBolinha() 
{
    circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha() 
{
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() 
{
    if (xBolinha + raio > width || xBolinha - raio < 0) 
    {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) 
    {
        velocidadeYBolinha *= -1;
    }
  
}

// RAQUETE

function mostraRaquete() 
{
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() 
{
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function verificaColisaoRaquete(x, y) 
{
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    
  if (colidiu) {
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}

function colisaoMinhaRaqueteBiblioteca() 
{
    colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    
    if (colidiu) 
    {
        velocidadeXBolinha *= -1;
    }
}

// OPONENTE

function mostraRaquete(x,y) 
{
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) 
  {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39)
    {
      chanceDeErrar = 40
    }
  } else 
  {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35)
    {
      chanceDeErrar = 35
    }
  }
}

function movimentaRaqueteOponente()
{
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
    }

    calculaChanceDeErrar();
}

function verificaColisaoRaquete(x, y) 
{
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    
  if (colidiu){
        velocidadeXBolinha *= -1;
    }
}

// PLACAR

function incluiPlacar() 
{
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(95,158,160));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(95,158,160));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() 
{
    if (xBolinha > 590) {
        meusPontos += 1;
        ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
        ponto.play();
    }
}
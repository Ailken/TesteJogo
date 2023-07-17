let personagem
let grama

const tamanho = 64
const velocidade = 64

let andarX = 0
let andarY = 0

let button

//executa apenas uma vez ao iniciar o programa
function setup() {
  createCanvas(576, 576);
  personagem = loadImage("perso.png")
  grama = loadImage("grass.png")
}

//fica executando em loop até que o programa seja encerrado
function draw () {
  background(220);
  
  if(andarX < 0){
    andarX = 0
  }
  if(andarY < 0){
    andarY = 0
  }
  if(andarX > tamanho * 8){
    andarX = tamanho * 8
  }
  if(andarY > tamanho * 8){
    andarY = tamanho * 8
  }
  
  
  for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
      image(grama, 64*i, 64*j, tamanho, tamanho)
    }
  }
  image(personagem, andarX, andarY, tamanho, tamanho)
  
  if(andarX === tamanho * 8 && andarY === tamanho * 8){
    //criar umm retangulo
    rect(160, 160, 256, 256)
    //escrever um texto GANHOU!
    textSize(35)
    text("GANHOU", 200, 300)
    //criar um botão
    button = createButton("Reiniciar")
    //resetar o jogo
    button.mousePressed(reset)
    button.position(250, 320)
    //parar o jogo
    noLoop()
  }
}

function reset(){
  andarX = 0
  andarY = 0
  button.remove()
  loop()
}

//executa sempre que uma tecla for pressionada
function keyPressed() {
  //UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
  if(keyIsDown(UP_ARROW)){
    andarY = andarY - velocidade
  }
  
  if(keyIsDown(DOWN_ARROW)){
    andarY += velocidade
  }
  if(keyIsDown(LEFT_ARROW)){
    andarX -= velocidade
  }
  if(keyIsDown(RIGHT_ARROW)){
    andarX += velocidade
  }
  
}
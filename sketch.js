function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
  
  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length
  let palavra = "spider man";
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
  // if(mouseX < 50) {
  //   let palavra = "s";
  //   text(palavra, 200, 200);
  // } else if(mouseX < 100) {
  //   let palavra = "spi";
  //   text(palavra, 200, 200);
  // } else {
  //   let palavra = "spider man";
  //   text(palavra, 200, 200);
  // }

}

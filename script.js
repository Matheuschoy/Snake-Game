let canvas= document.getElementById("snake");
let context= canvas.getContext("2d");
let box= 32;                            //32 pixels cada quadrado
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function criarBG() {
    context.fillStyle= "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle="green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown', update);

function update (event) {  //funcao para nao voltar para trás
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}


function iniciarJogo() {
    //sair do outro lado do mapa
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;  //direira
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;   //esquerda
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;   //pra cima
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;     //pra baixo
    
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //cordenadas

    if (direction == "right") snakeX += box;  //direita aumenta
    if (direction == "left") snakeX -= box;   //esquerda diminui
    if (direction == "up") snakeY -= box;   
    if (direction == "down") snakeY += box;

    //retirar o ultimo elemento

    snake.pop();

    //acrescentar na frente

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);  //intervalo de 100ms

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

function iniciarJogo() {
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

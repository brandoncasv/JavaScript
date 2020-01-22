const btn_Start = document.getElementById('start_Button');
const div_Blue = document.getElementById('color_Blue');
const div_Violet = document.getElementById('color_Violet');
const div_Orange = document.getElementById('color_Orange');
const div_Green = document.getElementById('color_Green');


function startGame() {
    let game = new Game();
}

class Game {
    constructor() {
        this.inicializar();
    }
    inicializar() {
        btn_Start.classList.add('hide');
    }
}
const btn_Start = document.getElementById('start_Button');
const div_Blue = document.getElementById('color_Blue');
const div_Violet = document.getElementById('color_Violet');
const div_Orange = document.getElementById('color_Orange');
const div_Green = document.getElementById('color_Green');


function startGame() {
     window.game = new Game();
}

class Game {
    constructor() {
        this.inicializar();
        this.generateSequence()
    }
    inicializar() {
        btn_Start.classList.add('hide');
        this.level = 1;
        this.colors = {
            div_Blue, div_Violet, div_Orange, div_Green
        };

    }
    generateSequence() {
        this.sequence = new Array(10).fill(0).map(
            n => Math.floor(Math.random() * 4)
        );
    }
}
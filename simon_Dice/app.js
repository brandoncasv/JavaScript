// getting a div and button with selector id 
const btn_Start = document.getElementById('start_Button');
const div_Blue = document.getElementById('color_Blue');
const div_Violet = document.getElementById('color_Violet');
const div_Orange = document.getElementById('color_Orange');
const div_Green = document.getElementById('color_Green');

// function for the button
function startGame() {
     window.game = new Game();
}

// class with all logic for the game
class Game {
    constructor() {
        this.inicializar();
        this.generateSequence()
        this.nextLevel()
    }
    inicializar() {
        btn_Start.classList.add('hide');
        this.level = 2;
        this.colors = {
            div_Blue, div_Violet, div_Orange, div_Green
        };

    }
    generateSequence() {
        this.sequence = new Array(10).fill(0).map(
            n => Math.floor(Math.random() * 4)
        );
    }

    nextLevel() {
        this.iluminateSequence()
    }

    transformNumberToColor(num) {
        switch (num) {
            case 0: return 'div_Blue'
            case 1: return 'div_Violet'
            case 2: return 'div_Orange'
            case 3: return 'div_Green'
        }
    }

    iluminateColor(color) {
        this.colors[color].classList.add('light');
    }

    offColor(color) {
        this.colors[color].classList.remove('light');
    }

    iluminateSequence() {
        for(let i = 0; i < this.level; i++) {
            let color = this.transformNumberToColor(this.sequence[i])
            if(i < 1) {
                () => {
                    setTimeout(this.iluminateColor(color), 1000)
                    setTimeout(this.offColor(color), 800)
                }
             } else {
                 () => {
                     setTimeout(this.iluminateColor(color), 2000 * i)
                     setTimeout(this.offColor(color), 800 * i)
                }

            }
        }
    }
}
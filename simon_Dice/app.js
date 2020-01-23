// getting a div and button with selector id 
const btn_Start = document.getElementById('start_Button');
const div_Blue = document.getElementById('color_Blue');
const div_Violet = document.getElementById('color_Violet');
const div_Orange = document.getElementById('color_Orange');
const div_Green = document.getElementById('color_Green');
const last_Level = 5;
// function for the button
function startGame() {
     window.game = new Game();
}

// class with all logic for the game
class Game {
    constructor() {
        this.inicializar();
        this.generateSequence()
        setTimeout(this.nextLevel(), 500)
    }
    inicializar() {
        this.nextLevel = this.nextLevel.bind(this);
        this.choiceColor = this.choiceColor.bind(this);
        btn_Start.classList.add('hide');
        this.level = 1;
        this.colors = {
            div_Blue, div_Violet, div_Orange, div_Green
        };

    }
    generateSequence() {
        this.sequence = new Array(last_Level).fill(0).map(
            n => Math.floor(Math.random() * 4)
        );
    }

    nextLevel() {
        this.subLevel = 0;
        this.iluminateSequence();
        this.addEventClick();
    }

    transformNumberToColor(num) {
        switch (num) {
            case 0: return 'div_Blue'
            case 1: return 'div_Violet'
            case 2: return 'div_Orange'
            case 3: return 'div_Green'
        }
    }

    transformColorToNumber(color) {
        switch (color) {
            case 'div_Blue': return 0
            case 'div_Violet': return 1
            case 'div_Orange': return 2
            case 'div_Green': return 3
        }
    }

    iluminateColor(color) {
        this.colors[color].classList.add('light');
        setTimeout(() => this.offColor(color), 350)
    }

    offColor(color) {
        this.colors[color].classList.remove('light');
    }

    addEventClick() {
        this.colors.div_Blue.addEventListener('click', this.choiceColor);
        this.colors.div_Violet.addEventListener('click', this.choiceColor);
        this.colors.div_Orange.addEventListener('click', this.choiceColor);
        this.colors.div_Green.addEventListener('click', this.choiceColor);
    }
    deleteEventClick() {
        this.colors.div_Blue.removeEventListener('click', this.choiceColor);
        this.colors.div_Violet.removeEventListener('click', this.choiceColor);
        this.colors.div_Orange.removeEventListener('click', this.choiceColor);
        this.colors.div_Green.removeEventListener('click', this.choiceColor);
    }

    choiceColor(event) {
        console.log(event)
        const nameColor = event.target.dataset.color;
        console.log(nameColor);
        const numberColor = this.transformColorToNumber(nameColor);
        this.iluminateColor(nameColor);
        if(numberColor === this.sequence[this.subLevel]) {
            this.subLevel++;
            if(this.subLevel === this.level) {
                this.level++;
                alert(`Nivel: ${this.level}`)
                this.deleteEventClick()
                if(this.level === (last_Level + 1))
                {
                    alert("has ganado")
                } else {
                    setTimeout(this.nextLevel, 2000);
                }
            } 
        } else {
            console.log("Has perdido");
        }
    }

    iluminateSequence() {
        for(let i = 0; i < this.level; i++) {
            const color = this.transformNumberToColor(this.sequence[i])                          
                setTimeout(() => this.iluminateColor(color), 1000 * i)             
            }
        }
    }
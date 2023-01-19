let screen = document.querySelector('.calculator__result');
screen.innerText = '0';
let buttonsOperand = document.querySelectorAll('.button');
let calculations = '';


//Escucha de botones
for (let button of buttonsOperand) {
    button.addEventListener('click', function() {
        let buttonPressed = button.getAttribute('value');

        switch (buttonPressed) {
            case 'ac':
                clearEverything();
                break;
            case '=':
                calculations = eval(calculations);
                screen.innerText = calculations;
                break;
            case '+':
                clearScreen();
                calculations += '+';
                break;
            case '-':
                clearScreen();
                calculations += '-';
                break;
            case '*':
                clearScreen();
                calculations += '*';
                break;
            case '/':
                clearScreen();
                calculations += '/';
                break;
            case '.':
                clearScreen();
                calculations += '.';
                break;
            default:
                if (buttonPressed >= 0 && buttonPressed <= 9) {
                    calculations += buttonPressed;
                    screen.innerText = calculations;
                }
                break;
        }

        console.log(calculations);
    });
}

function clearEverything() {
    calculations = '';
    screen.innerText = '0';
}

function clearScreen() {
    screen.innerText = '0';
}

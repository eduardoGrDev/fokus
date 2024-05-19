//Constantes que guardan ubicacion de los diferentes botones y el cronometro
const focusButton = document.getElementById('focusButton');
const shortBreakButton = document.getElementById('shortBreakButton');
const longBreakButton = document.getElementById('longBreakButton');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
//Variables para funcion de cronometro
let timer = null;
let timeLeft = 25 * 60; // 25 minutos en segundos
let isRunning = false;
//Se crea array con los botones superiroes
const listButtons = [
    focusButton,
    shortBreakButton,
    longBreakButton
];

//Funcion para actualizar el contador
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
//Funcion para disminuir el tiempo y dar mensajes cuando terminas
function timerDecreser () {
    if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
    } else {
        clearInterval(timer);
        isRunning = false;
        startButton.innerHTML = 'Reiniciar';
        if (focusButton.attributes[1].nodeValue == 'timer__topButtons__button-active') {
            alert ('Es hora del descanso!!');
        } else if (shortBreakButton.attributes[1].nodeValue == 'timer__topButtons__button-active') {
            alert ('Es hora de hacer fokus!!');
        } else if (longBreakButton.attributes[1].nodeValue == 'timer__topButtons__button-active') {
            alert ('Es hora de hacer fokus!!');
        }
    };
}
//Funcion para iniciar el contador
function startTimer () {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(timerDecreser, 1000);
    } 
}
//Funcion para pausar el contador
function stopTimer () {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    } 
}
//Funcion para reiniciar el contador una vez que termina
function restartTimer () {
    if (focusButton.attributes[1].nodeValue == 'timer__topButtons__button-active') {
        timeLeft = (25 * 60);
    } else if (shortBreakButton.attributes[1].nodeValue == 'timer__topButtons__button-active') {
        timeLeft = (5 * 60);
    } else if (longBreakButton.attributes[1].nodeValue == 'timer__topButtons__button-active') {
        timeLeft = (15 * 60);
    }
    updateTimerDisplay();
}
//Se repaza array de los botones superiores y se asigna accion al dar click 
for (let i = 0; i < (listButtons.length); i++) {
    const button = listButtons[i];
    button.onclick = function () {
        shortBreakButton.setAttribute('Class', 'timer__topButtons__button');
        longBreakButton.setAttribute('Class', 'timer__topButtons__button');
        focusButton.setAttribute('Class', 'timer__topButtons__button');
        button.setAttribute('Class', 'timer__topButtons__button-active');
        startButton.innerHTML = 'Iniciar';
        stopTimer();
        if (button == focusButton) {
            timeLeft = (25 * 60);
        } else if (button == shortBreakButton) {
            timeLeft = (5 * 60);
        } else if (button == longBreakButton) {         
            timeLeft = (15 * 60);
        }
        updateTimerDisplay();
    };
}
// Se asigna accion al dar click al boton de iniciar
startButton.onclick = function () {
    if (startButton.innerHTML == 'Iniciar') {
        startButton.innerHTML = 'Pausar';
        startTimer();
    } else if (startButton.innerHTML == 'Pausar'){
        startButton.innerHTML = 'Iniciar';
        stopTimer();
    } else if (startButton.innerHTML == 'Reiniciar') {
        startButton.innerHTML = 'Iniciar';
        restartTimer();
    }
}

updateTimerDisplay();

/*shortBreakButton.onclick = function () {
    shortBreakButton.setAttribute('Class', 'timer__topButtons__button-active');
    longBreakButton.setAttribute('Class', 'timer__topButtons__button');
    focusButton.setAttribute('Class', 'timer__topButtons__button');
    timer.innerHTML = '5:00';
}

focusButton.onclick = function () {
    shortBreakButton.setAttribute('Class', 'timer__topButtons__button');
    longBreakButton.setAttribute('Class', 'timer__topButtons__button');
    focusButton.setAttribute('Class', 'timer__topButtons__button-active');
    timer.innerHTML = '25:00';
}

longBreakButton.onclick = function () {
    shortBreakButton.setAttribute('Class', 'timer__topButtons__button');
    longBreakButton.setAttribute('Class', 'timer__topButtons__button-active');
    focusButton.setAttribute('Class', 'timer__topButtons__button');
    timer.innerHTML = '15:00';
}*/
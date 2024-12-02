let countdown;  
let isPaused = false;  
let timeRemaining = 0;  

const timeInput = document.getElementById('timeInput');  
const timerDisplay = document.getElementById('timerDisplay');  
const startButton = document.getElementById('startButton');  
const pauseButton = document.getElementById('pauseButton');  
const resetButton = document.getElementById('resetButton');  

startButton.addEventListener('click', startTimer);  
pauseButton.addEventListener('click', pauseTimer);  
resetButton.addEventListener('click', resetTimer);  

function startTimer() {  
    if (isPaused) {  
        isPaused = false;  
        return;  
    }  

    const timeParts = timeInput.value.split(':');  
    const minutes = parseInt(timeParts[0]) || 0;  
    const seconds = parseInt(timeParts[1]) || 0;  
    timeRemaining = minutes * 60 + seconds;  

    if (timeRemaining > 0) {  
        countdown = setInterval(updateTimer, 1000);  
    }  
}  

function updateTimer() {  
    if (timeRemaining <= 0) {  
        clearInterval(countdown);  
        alert("Time's up!");  
        return;  
    }  

    timeRemaining--;  

    const minutes = Math.floor(timeRemaining / 60);  
    const seconds = timeRemaining % 60;  

    timerDisplay.textContent = `${pad(minutes)}:${pad(seconds)}`;  

    if (timeRemaining < 10) {  
        timerDisplay.classList.add('red');  
    } else {  
        timerDisplay.classList.remove('red');  
    }  
}  

function pauseTimer() {  
    isPaused = true;  
    clearInterval(countdown);  
}  

function resetTimer() {  
    clearInterval(countdown);  
    timeInput.value = '';  
    timerDisplay.textContent = '00:00';  
    timeRemaining = 0;  
    timerDisplay.classList.remove('red');  
}  

function pad(number) {  
    return String(number).padStart(2, '0');  
}
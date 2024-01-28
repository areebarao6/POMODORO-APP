let timerInterval;
let leftTime=25*60;// 25 minutes * 60 seconds
function startTimer(){
    timerInterval=setInterval(updateTimer,1000);
}
function stopTimer(){clearInterval(timerInterval);}
function resetTimer(){
    clearInterval(timerInterval);
    leftTime=25*60;
    updateDisplay();
}

function updateDisplay(){
    const minutes=Math.floor(leftTime/60);
    const seconds=leftTime%60;
    document.getElementById('timer').innerText=
    `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}
function setTimer(){
    const timerInput=document.getElementById('timer-input');
    const minutes=parseInt(timerInput.value);
    if(isNaN(minutes) || minutes<=0){
        alert('Please enter a valid positive number for the timer.');

    }else{
        leftTime=minutes*60;
        updateDisplay();
    }
}
function updateTimer(){
    if(leftTime>0){
        leftTime--;
        updateDisplay();
    }else{
        clearInterval(timerInterval);
        alert('Pomodoro session completed! Take a Break. ');
        leftTime=25*60;
        updateDisplay();
    }
}
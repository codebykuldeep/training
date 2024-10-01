const startBtn = document.getElementById('start');
const resumeBtn = document.getElementById('timer-resume');
const pauseBtn = document.getElementById('timer-pause');
const resetBtn = document.getElementById('timer-reset');
let timer;

let data ={};

let StartBtnCLosed =false;
let TimerRunning = false;


if(localStorage.getItem('data')){
    data = JSON.parse(localStorage.getItem('data'));
    console.log(data);
    TimerRunning=true;
    startTimer();
}



startBtn.addEventListener('click',()=>{
    if(!StartBtnCLosed){
        const input = document.querySelectorAll('.input');
        data ={};
        data.hour =Number(input[0].value) || 0;
        data.minute=Number(input[1].value) || 0;
        data.second=Number(input[2].value) || 0;
        console.log(data);

        StartBtnCLosed = true;
        setTimeout(()=>{StartBtnCLosed=false;},2000)
        
        if(timer){ // just in case previous timer is still running so to remove it executing furthur
            stopTimer();
        }
        startTimer();
    }
    
})

pauseBtn.addEventListener('click',()=>{
    stopTimer(); 
    TimerRunning = false;
})
resumeBtn.addEventListener('click',()=>{
    if(!TimerRunning){
        startTimer();
        TimerRunning = true;
    }
})

resetBtn.addEventListener('click',()=>{
    stopTimer();

    data.hour =0;
    data.minute=0;
    data.second=0;
    console.log(data);
    updateView(data.hour,data.minute,data.second)
    localStorage.removeItem('data')
    
})



function startTimer(){
    const div =document.querySelectorAll('.show');
    div[0].textContent =data.hour;
    div[1].textContent =data.minute;
    div[2].textContent =data.second;

    TimerRunning= true;
    timer =setInterval(runTimer,1000);
}



function runTimer() {
    if(data.hour === 0 && data.minute === 0 && data.second === 0){
        localStorage.removeItem('data');
        stopTimer();
    }
    else{
        data.second-=1;
    if(data.second<0){
        data.minute-=1;
        data.second=59;
    }
    if(data.minute<0){
        data.hour-=1
        data.minute=59;
    }
    if(data.hour<=0){
        data.hour=0
    }

    if(data.hour === 0 && data.minute === 0 && data.second === 0){
        alert('Time Up !')
        localStorage.removeItem('data');
        stopTimer();
       
    }
    updateView(data.hour,data.minute,data.second)
    localStorage.setItem('data',JSON.stringify(data));
    
    }
}



function stopTimer(){
    clearInterval(timer);
}



function updateView(hour,minute,second){
    const div =document.querySelectorAll('.show');
    div[0].textContent =hour;
    div[1].textContent =minute;
    div[2].textContent =second;
}
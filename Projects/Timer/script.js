const startBtn = document.getElementById('start');
const resumeBtn = document.getElementById('timer-resume');
const pauseBtn = document.getElementById('timer-pause');
const resetBtn = document.getElementById('timer-reset');
let timer;

let data ;

let StartBtnCLosed =false;
let TimerRunning = false;


if(localStorage.getItem('data')){
    data =Number(localStorage.getItem('data')) ;
    console.log(data);
    TimerRunning=true;
    startTimer();
}



startBtn.addEventListener('click',()=>{
    if(!StartBtnCLosed){
        const input = document.querySelectorAll('.input');
        
        let hour =Number(input[0].value) || 0;
        let minute=Number(input[1].value) || 0;
        let second=Number(input[2].value) || 0;

        data = hour*3600 +minute *60 +second
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
    if(!TimerRunning && data){
        startTimer();
        TimerRunning = true;
    }
})

resetBtn.addEventListener('click',()=>{
    stopTimer();

    data = undefined;
    console.log(data);

    updateView(0)
    localStorage.removeItem('data')
    
})





function startTimer(){
    updateView(data);

    TimerRunning= true;
    timer =setInterval(runTimer,1000);
}



function runTimer() {
    if(data === 0){
        localStorage.removeItem('data');
        stopTimer();
    }
    else{
        data= data - 1;
    

    if(data === 0){
        alert('Time Up !')
        localStorage.removeItem('data');
        stopTimer();
       
    }
    updateView(data)
    localStorage.setItem('data',JSON.stringify(data));
    
    }
}



function stopTimer(){
    clearInterval(timer);
}



function updateView(data){
    const div =document.querySelectorAll('.show');

    let hour =Math.floor(data/ 3600);
    let minute= Math.floor((data%3600)/60);
    let second= Math.floor((data%3600)%60);

    div[0].textContent =hour;
    div[1].textContent =minute;
    div[2].textContent =second;
}
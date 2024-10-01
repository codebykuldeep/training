const localStoreBtn =document.getElementById('local-store');
const localShowBtn =document.getElementById('local-show')

const sessionStoreBtn =document.getElementById('session-store');
const sessionShowBtn =document.getElementById('session-show');

localStoreBtn.addEventListener('click',()=>{
    const input = document.getElementById('local-inp');
    localStorage.setItem('local',input.value)
})

localShowBtn.addEventListener('click',()=>{
    const div =document.getElementById('local-view');
    if(localStorage.getItem('local')){
        div.textContent = localStorage.getItem('local');
    }else{
        div.textContent ='Nothing in Local Storage'
    }
})


sessionStoreBtn.addEventListener('click',()=>{
    const input = document.getElementById('session-inp');
    sessionStorage.setItem('session',input.value)
})

sessionShowBtn.addEventListener('click',()=>{
    const div =document.getElementById('session-view');
    if(sessionStorage.getItem('session')){
        div.textContent = sessionStorage.getItem('session');
    }else{
        div.textContent ='Nothing in Session Storage'
    }
})
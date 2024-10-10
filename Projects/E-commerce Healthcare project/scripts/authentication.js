const signInBtn =document.querySelector('.signin');
const registerBtn = document.querySelector('.register');


//modal elemets
const loginModal = document.querySelector('.login-modal');
const registerModal = document.querySelector('.register-modal');
const overlay = document.querySelector('.overlay')
const closeModal =document.querySelectorAll('.close-modal');


//login form elements
const loginSubmitBtn = document.getElementById('login-submit')
const loginInput = document.querySelectorAll('.login-data');


//register form elements
const registerSubmitBtn = document.getElementById('register-submit')
const registerInput = document.querySelectorAll('.register-data');


//user element
const userBox = document.querySelector('.user');

//functions for actions
//for handling overlay and modal
function handleModal(dom1,dom2){
    dom1.classList.toggle('hidden');
    dom2.classList.toggle('hidden');
}

function UpdateUser(){
    userBox.textContent =`Hello , ${currentUser.firstName}`
}





//Modal 
signInBtn.addEventListener('click',()=>{
    handleModal(loginModal,overlay);
})

closeModal[0].addEventListener('click',()=>{
    handleModal(loginModal,overlay);
})
registerBtn.addEventListener('click',()=>{
    handleModal(registerModal,overlay);
})

closeModal[1].addEventListener('click',()=>{
    handleModal(registerModal,overlay);
})


//Login form
loginSubmitBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    let email =loginInput[0].value;
    let password=loginInput[1].value;

    
    if(email && password){
        let tempUser = users.find((user)=> user.email === email);
        console.log(tempUser);
        
        if(tempUser?.password === password){
            currentUser = tempUser;

            UpdateUser();
            handleModal(loginModal,overlay);
        }
    }
    
})


//register form
registerSubmitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let name = registerInput[0].value;
    let last =registerInput[1].value;
    let email = registerInput[2].value;
    let password = registerInput[3].value;
    let registeredUser =new newUser(name,last,email,password);

    users.push(registeredUser);
    

    handleModal(registerModal,overlay);
})

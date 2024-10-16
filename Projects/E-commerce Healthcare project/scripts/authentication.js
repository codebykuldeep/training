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
//check if current user is available in session storage
if(currentUser){
    UpdateUser();
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

            sessionStorage.setItem('currentUser',JSON.stringify(currentUser));

            UpdateUser();
            handleModal(loginModal,overlay);
        }
    }
    
})


//register form


const validateForm =(inputDomArray) =>{

    const emptyMsg ='This field is required.'
    const inputMsg = document.querySelectorAll('.input-msg')
    let result = true;
    inputDomArray.forEach((inputElement,index) => {
        console.log(index);
        
        if(inputElement.type === 'text'){
            let testPattern =/^[A-Za-z]+$/;
            
            let text =inputElement.value;
            console.log(testPattern.test(text));
            if(!testPattern.test(text)){

                inputElement.style.border ='1px solid red'
                result =false;

                if(text.length===0){
                    inputMsg[index].textContent=emptyMsg;
                }
                else{
                    inputMsg[index].textContent='Enter a valid Name';
                }
            }
        }
        if(inputElement.type === 'email'){
            
            console.log('email',inputElement.value);
            let testPattern =/[A-Za-z]+$[^0-9]/;
            
            let text =inputElement.value;
            console.log(testPattern.test(text));
            if(!testPattern.test(text)){

                inputElement.style.border ='1px solid red'
                result =false;
            }
            
        }
        if(inputElement.type === 'password'){
            
            let testPattern =/^[A-Za-z0-9]{9,}$/;
            
            let text =inputElement.value;
            console.log(testPattern.test(text));
            if(!testPattern.test(text)){

                inputElement.style.border ='1px solid red'
                result =false;
            }
            
        }
        if(inputElement.type === 'checkbox'){
            
            result = inputElement.checked;
            inputElement.parentNode.children[1].style.color ='red'
            console.log('result',result);
            
        }
    });
    

    return result;
}



registerSubmitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(registerInput[4].checked);
    if(validateForm(registerInput)){
        console.log('Registered');
    }
    else{
        console.log('Failed');
        
    }





    // let name = registerInput[0].value;
    // let last =registerInput[1].value;
    // let email = registerInput[2].value;
    // let password = registerInput[3].value;
    // let registeredUser =new newUser(name,last,email,password);

    // users.push(registeredUser);
    // updateUsersData();
    

    // handleModal(registerModal,overlay);
})


registerInput.forEach((inpElement)=>{
    inpElement.addEventListener('focus',()=>{
        inpElement.style.border ='1px solid gray'
    })
})
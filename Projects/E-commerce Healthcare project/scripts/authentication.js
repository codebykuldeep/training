const signInBtn = document.querySelector(".signin");
const registerBtn = document.querySelector(".register");

//modal elemets
const loginModal = document.querySelector(".login-modal");
const registerModal = document.querySelector(".register-modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelectorAll(".close-modal");

//login form elements
const loginSubmitBtn = document.getElementById("login-submit");
const loginInput = document.querySelectorAll(".login-data");

//register form elements
const registerSubmitBtn = document.getElementById("register-submit");
const registerInput = document.querySelectorAll(".register-data");

//user element
const userBox = document.querySelector(".user");

//functions for actions
//for handling overlay and modal
function handleModal(dom1, dom2) {
  dom1.classList.toggle("hidden");
  dom2.classList.toggle("hidden");
}

function UpdateUser() {
  userBox.textContent = `Hello , ${currentUser.firstName}`;
}
//check if current user is available in session storage
if (currentUser) {
  UpdateUser();
}

//Modal
signInBtn.addEventListener("click", () => {
  handleModal(loginModal, overlay);
});

closeModal[0].addEventListener("click", () => {
  handleModal(loginModal, overlay);
});
registerBtn.addEventListener("click", () => {
  handleModal(registerModal, overlay);
});

closeModal[1].addEventListener("click", () => {
  handleModal(registerModal, overlay);
});



//Validation form

const validateForm = (inputDomArray,inputMsg,checkbox) => {
  const emptyMsg = "This field is required.";
  
  let result = true;
  inputDomArray.forEach((inputElement, index) => {
    const errorBorderColor ="#eb5555";
    const borderProperty =`1px solid ${errorBorderColor}`;

    if (inputElement.type === "text") {
      let testPattern = /^[A-Za-z]+$/;

      let text = inputElement.value;
      
      if (!testPattern.test(text)) {
        inputElement.style.borderBottom = borderProperty;
        result = false;

        if (text.length === 0) {
          inputMsg[index].textContent = emptyMsg;
        } else {
          inputMsg[index].textContent = `Enter a valid ${inputElement.name} name`;
        }
        inputMsg[index].style.display='block';
      }
    }
    if (inputElement.type === "email") {
      
      let testPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      let text = inputElement.value;
     
      if (!testPattern.test(text)) {
        inputElement.style.borderBottom = borderProperty;
        result = false;

        if (text.length === 0) {
          inputMsg[index].textContent = emptyMsg;
        } else {
          inputMsg[index].textContent = "enter a valid email";
        }
        inputMsg[index].style.display='block';
      }
    }
    if (inputElement.type === "password") {
      let testPattern = /^[A-Za-z0-9]{8,}$/;

      let text = inputElement.value;
      
      if (!testPattern.test(text)) {
        inputElement.style.borderBottom = borderProperty;
        result = false;

        if (text.length === 0) {
          inputMsg[index].textContent = emptyMsg;
        } else {
          inputMsg[index].textContent =
            "Enter a valid Password of minimum length 8.";
        }
        inputMsg[index].style.display='block';
      }
    }
    if (checkbox && inputElement.type === "checkbox") {
      result = inputElement.checked;
      inputElement.parentNode.children[1].style.color = errorBorderColor;
    }
  });

  return result;
};

//Login form
loginSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputMsg = document.querySelectorAll(".login-form .input-msg");
  if(!validateForm(loginInput,inputMsg,false)) return;

  let email = loginInput[0].value;
  let password = loginInput[1].value;

  if (email && password) {
    let tempUser = users.find((user) => user.email === email);
    console.log(tempUser);

    if (tempUser?.password === password) {
      currentUser = tempUser;

      sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

      UpdateUser();
      handleModal(loginModal, overlay);
    }
    else{
      const loginMsg = document.querySelector('.login-msg');
      loginMsg.textContent = `Please check your credentials`
    }
  }
});




//registraion form


registerSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  

  const inputMsg = document.querySelectorAll(".register-form .input-msg");
  if (validateForm(registerInput,inputMsg,true)) {
    let name = registerInput[0].value;
    let last =registerInput[1].value;
    let email = registerInput[2].value;
    let password = registerInput[3].value;
    let registeredUser =new newUser(name,last,email,password);

    users.push(registeredUser);
    updateUsersData();

    handleModal(registerModal,overlay);
  } else {
    console.log("Failed");
  }

  
});

registerInput.forEach((inpElement,index) => {
  const inputMsg = document.querySelectorAll(".register-form .input-msg");
  inpElement.addEventListener("focus", () => {
    
    if(inpElement.type!== 'checkbox') inputMsg[index].textContent='';
    inpElement.style.border ='none'
    inpElement.style.borderBottom = "1px solid var(--border)";
  });
});

loginInput.forEach((inpElement,index) => {
  const inputMsg = document.querySelectorAll(".login-form .input-msg");
  inpElement.addEventListener("focus", () => {
    
    if(inpElement.type!== 'checkbox') inputMsg[index].textContent='';
    inpElement.style.border ='none'
    inpElement.style.borderBottom = "1px solid var(--border)";
  });
});

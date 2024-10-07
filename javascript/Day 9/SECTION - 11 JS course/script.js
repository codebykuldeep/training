'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function (movements){
  containerMovements.innerHTML ='';
  
  movements.forEach((mov,i) => {
    const type = mov>0 ?'deposit': 'withdrawal';

    const html =`
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin',html)
  });
}



const createUsername =(accounts)=>{
  accounts.forEach((account)=>{
    account.username = account.owner
    .toLowerCase().split(' ')
    .map((word)=> word[0])
    .join('');
  })
  
}
createUsername(accounts);


//UI UPDATION METHOD
const updateBalance=(account)=>{
  let balance = account.movements.reduce((total,val)=>{return total+val},0);
  currentAccount.balance = balance;
  labelBalance.textContent = `${balance} EUR`
}




const updateSummaryLabel =(account)=>{
  let deposits = account.movements.reduce((total,val)=>{
    if(val>=0)
       return total+=val;
    else
      return total;
  },0);

  let withdrawal =  account.movements.reduce((total,val)=>{
    if(val<0)
      return total+=val;
    else
      return total;
  },0);

  let interest =account.movements.reduce((total,val)=>{
    
    if(val>=0){
      val =(val * account.interestRate)/100;
      
      return val>=1 ? total+val :total;
    }  
    else
     return total;
  },0)

  labelSumIn.textContent =`${deposits} $`;
  labelSumOut.textContent = `${Math.abs(withdrawal)} $`;
  labelSumInterest.textContent = `${interest} $`;
}



const updateUI =(account)=>{
  updateBalance(account);
  updateSummaryLabel(account)
  displayMovements(account.movements);
};







//LOGIN FUNCTIONALITY
let currentAccount ;

btnLogin.addEventListener('click',(e)=>{
  //prevent form default function of reload
  e.preventDefault();

  currentAccount = accounts.find((account ) => {
    return account.username === inputLoginUsername.value;
  })

  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)){


    //clear input fields
    inputLoginUsername.value = inputLoginPin.value ='';
    inputLoginPin.blur();

    labelWelcome.textContent =`Welcome, ${currentAccount.owner}`
    containerApp.style.opacity = 1;
    updateUI(currentAccount);
  }
  
})


//Transfer Functionality
btnTransfer.addEventListener('click',(e)=>{
  //prevent form default function of reload
  e.preventDefault();
  let amount = Number(inputTransferAmount.value);
  

  let transferUsername =inputTransferTo.value;
  let transferAccount = accounts.find((account)=>account.username === transferUsername );
  

  if(amount > 0 && transferAccount && currentAccount.balance>= amount){
    currentAccount.movements.push(-1*amount);
    transferAccount.movements.push(amount);
  }


  //Update UI

  inputTransferAmount.value = inputTransferTo.value ='';
  inputTransferTo.blur();

  updateUI(currentAccount);
})



//Loan function
btnLoan.addEventListener('click',(e)=>{
  //prevent form default function of reload
  e.preventDefault();
  let amount = Number(inputLoanAmount.value);
  let approved = currentAccount.movements.some((amt)=>{
    return amt>= (0.1 * amount)
  })

  if(approved){
    currentAccount.movements.push(amount);
  }

  //Update UI

  inputLoanAmount.value = '';
  inputLoanAmount.blur();

  updateUI(currentAccount);
})


//close account function
btnClose.addEventListener('click',(e)=>{
  e.preventDefault();
  if(inputCloseUsername.value === currentAccount.username
    &&
    Number(inputClosePin.value) === currentAccount.pin
   ){

    const index = accounts.findIndex((acc)=>
      acc.username === currentAccount.username
    );

    console.log(index);
    //delete account
    accounts.splice(index,1);
    labelWelcome.textContent =`Log in to get started`
    containerApp.style.opacity = 0;
    
   }
})

//sot function
let sortclicked = true;
btnSort.addEventListener('click',()=>{
  if(sortclicked){
    let sortedArray = currentAccount.movements.toSorted((a,b)=>a-b);
    displayMovements(sortedArray);
    
  }
  else{
    displayMovements(currentAccount.movements);
  }

  sortclicked =!sortclicked;
  
})





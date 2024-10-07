const flight = 'LH234';

const jonas ={
    name:'Jonas smith',
    passport : 2345467,
}

const checkIn = function(flightNum, passenger){
    flightNum ='LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 2345467){
        console.log('Checked IN');
        
    }
    else{
        console.log("WRONG passport");
        
    }
}

checkIn(flight,jonas);

console.log(flight);
console.log(jonas);




/*
Checked IN
LH234
{ name: 'Mr.Jonas smith', passport: 2345467 }


*/
'use strict';

const bookings = [];

const createBooking = function (flightnum,numPassenger =1,price=199*numPassenger){
const booking ={
    flightnum,
    numPassenger,
    price
};
bookings.push(booking)
}

createBooking(1,3,250)

createBooking(2,3);

createBooking(3);


//to skip a default parameters
createBooking(4,undefined,500);

console.log(bookings);

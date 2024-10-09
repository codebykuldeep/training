const luftansa = {
    airline : "luftansa",
    iataCode: "LH",
    booking:[],
    book(flightNum , name){
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.booking.push({flight:this.iataCode,name});
    }
}

luftansa.book(250,"john");

console.log(luftansa);


const euroWing = {
    airline : "eurowing",
    iataCode: "EU",
    booking:[],
}

const eurowingBookFUnction = luftansa.book.bind(euroWing);

eurowingBookFUnction(43,'Danny');

console.log(euroWing);

//we can fix params value using bind

const eurowingfn2= luftansa.book.bind(euroWing,25);

eurowingfn2('Richy');

console.log(euroWing);

//apply bind this to the object in event listener
luftansa.plane =300;
luftansa.buyPlane = function(){
    console.log(this);

    this.plane++;
    console.log(this.plane);
    
}


//if we donot use bind , this will point the html element this instead of ludtansa object
document.querySelector('.buy').addEventListener('click',luftansa.buyPlane.bind(luftansa));

//partial application

const tax = (rate,value) => value + rate*value;

const VAT = tax.bind(null,0.23);

const GST = tax.bind(null,0.18);

console.log(VAT(100));

console.log(GST(100));




/*
{
  airline: 'luftansa',
  iataCode: 'LH',
  booking: [ { flight: 'LH', name: 'john' } ],
  book: [Function: book]
}
Danny booked a seat on eurowing flight EU43   
{
  airline: 'eurowing',
  iataCode: 'EU',
  booking: [ { flight: 'EU', name: 'Danny' } ]
}
Richy booked a seat on eurowing flight EU25
{
  airline: 'eurowing',
  iataCode: 'EU',
  booking: [ { flight: 'EU', name: 'Danny' }, { flight: 'EU', name: 'Richy' } ]      
}

*/
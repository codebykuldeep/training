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

luftansa.book(210,'Doe');

console.log(luftansa);


const euroWing = {
    airline : "eurowing",
    iataCode: "EU",
    booking:[],
}


//call
const book = luftansa.book;

book.call(euroWing,23,"Sarah");

book.call(euroWing,23,"RIChIE");

console.log(euroWing);


//apply
book.apply(euroWing,[50,'Joe'])

const arr =[50,'Joe']
book.call(euroWing,...arr)
console.log(euroWing);



/*
john booked a seat on luftansa flight LH250
Doe booked a seat on luftansa flight LH210
{
  airline: 'luftansa',
  iataCode: 'LH',
  booking: [ { flight: 'LH', name: 'john' }, { flight: 'LH', name: 'Doe' } ],        
  book: [Function: book]
}
Sarah booked a seat on eurowing flight EU23
RIChIE booked a seat on eurowing flight EU23
{
  airline: 'eurowing',
  iataCode: 'EU',
  booking: [ { flight: 'EU', name: 'Sarah' }, { flight: 'EU', name: 'RIChIE' } ]     
}
Joe booked a seat on eurowing flight EU50
Joe booked a seat on eurowing flight EU50
{
  airline: 'eurowing',
  iataCode: 'EU',
  booking: [
    { flight: 'EU', name: 'Sarah' },
    { flight: 'EU', name: 'RIChIE' },
    { flight: 'EU', name: 'Joe' },
    { flight: 'EU', name: 'Joe' }
  ]
}

*/
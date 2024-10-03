const celsiustoKevin =function (){
    const measurement ={
        type:'temp',
        unit:'Celsius',
        to:'Kevin',
        value:Number(prompt('Enter celsius value')),
    }

    console.table(measurement)

    let kevin= measurement.value +273;
    return kevin;
}


// console.warn(celsiustoKevin());
// console.error(celsiustoKevin());


console.log(celsiustoKevin());

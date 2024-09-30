let country ;
let capital;
let population ;

function describeCountry(country,population,capital){
    console.log(`${country} has ${population} million people and its capital city is ${capital}`);
    
}

describeCountry('finalnd',6,'Helsinki')


function percentage(population) {
    return (Number(population)/7900)*100;
}

const percentage2 = function (population){
    return (Number(population)/7900)*100;
}

const percentage3 =population =>((population)/7900*100);


console.log(percentage(6),percentage2(6),percentage3(6));


function CountryWithPercentage(country,population){

    console.log(`${country} has ${population} million people, which is about ${percentage(population)}% of the world`);
    
}
CountryWithPercentage('china',1441)

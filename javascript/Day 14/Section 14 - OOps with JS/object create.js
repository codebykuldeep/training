const PersonProto = {
    calcAge(){
        console.log(2024 - this.birthyear)
    }
};

const steven = Object.create(PersonProto);

console.log((steven));
steven.birthyear = 2000;

steven.calcAge();

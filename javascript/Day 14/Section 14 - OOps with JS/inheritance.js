const Person = function (name,year){
    this.name = name;
    this.year= year;
}

const Student = function(name,year,course){
    Person.call(this,name,year);
    this.course= course;
}

const s1 = new Student('jonas',2000,'CSE');

console.log(s1);


//linking prototypes
Student.prototype = Object.create(Person.prototype)

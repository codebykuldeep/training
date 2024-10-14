const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };
  
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  
  const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
  };
  
  // Linking prototypes
  Student.prototype = Object.create(Person.prototype);
  
  Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };
  
  const mike = new Student('Mike', 2020, 'Computer Science');
  mike.introduce();
  mike.calcAge();
  
  console.log(mike.__proto__);
  console.log(mike.__proto__.__proto__);
  
  console.log(mike instanceof Student);
  console.log(mike instanceof Person);
  console.log(mike instanceof Object);
  
  Student.prototype.constructor = Student;
  console.dir(Student.prototype.constructor);



  /*
  My name is Mike and I study Computer Science
    test.js:7 17
    test.js:26 Person {introduce: ƒ}
    test.js:27 {calcAge: ƒ}
    test.js:29 true
    test.js:30 true
    test.js:31 true
    test.js:34 ƒ Student(firstName, birthYear, course)
  
  */
//  Herencia

// Constructor 1

var Person = function(name){
    this.name = name;
}

var john = new Person('John');

//Constructor 2

var Developer = function(name, skills, yearsOfExperience) {

    Person.call(this, name)


    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
}

var joaquin = new Developer('Joaquin', 'Js', 7);

console.log(joaquin);
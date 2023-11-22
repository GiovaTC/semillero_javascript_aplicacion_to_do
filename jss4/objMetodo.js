var john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990,
    calculateAge: function(birthYear){
        var today = new Date();
        var year = today.getFullYear();

        this.age = year - this.birthYear;
    }

}

john.calculateAge();

console.log(john);

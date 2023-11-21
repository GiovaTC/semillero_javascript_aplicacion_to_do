var john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990
}

console.log(john.firstName);

john.firstName = 'Jane';

console.log(john.firstName);

john['firstName'] = 'Joe';

console.log(john['firstName']);

console.log(john['lastName']);


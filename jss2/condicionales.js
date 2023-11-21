
var time = 13;
var greeting;

if (time < 12) {
    greeting = "Good Morning";
}

if (time < 20) {
    greeting = "Good Afternoon";
}

if (time >= 20) {
    greeting = "Good Evening";
}

console.log(greeting)

//Concatenados con else if
var time = 13;
var greeting;


if (time < 12) {
    greeting = "Good Morning";
} else if (time < 20){
    greeting =  "Good Afternoon";
} else if (time >= 20) {
    greeting = "Good Evening";
}

console.log(greeting)

//Reto 01
var time = 25;
var greeting;

if (time < 0 || time >= 24) {
  greeting = "Invalid hour";
} else if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20) {
  greeting = "Good evening";
}

console.log(greeting);




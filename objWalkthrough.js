const person = {
    firstName: "Jaclyn",
    lastName: "Foster",
    age: 34,
    hometown: "Canton",
    hobbies: ["crocheting", "hiking", "painting"],
    faveMovies: {
        movieName: "Megan",
        rating: 5,
        year: "2023"
    },
    faveFood: [
        {
            name: "pizza",
            size: "large",
            toppings: ["pepperoni", "pineapple", "sausage"]
        },
        {
            name: "noodles",
            size: "large",
            toppings: ["curry", "egg", "ginger"]
        }
    ]

}
console.log(person.lastName);
console.log(person["firstName"]);
console.log(person.hobbies[2]);
console.log(person["hobbies"][2]);
console.log(person.faveMovies.year);
console.log(person.faveFood[1].toppings[0]);

let {hometown, firstName} = person; //destructuring
console.log(hometown, firstName);

person.faveColor = "blue"; //adding to object
console.log(person)

delete person.age; //removing key value from object
console.log(person);

delete person.faveFood.splice(0,1) //delete item out of an array on an object
console.log(person);

//--------CLASSES----------------//

class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    greeting() {
        console.log(`Hello, my name is ${this.name} & I am a ${this.breed}. I am ${this.age} years old.`)
    }
}

let dog1 = new Dog ("Marley", "Daschund", 11);
console.log(dog1);
let dog2 = new Dog ("Gunner", "Rat Terrier", 1);
console.log(dog2);
dog1.greeting();

for(let key in dog1) {
console.log(dog1[key]);
}

class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel) {
        super(name, breed, age)
        this.trainingLevel = trainingLevel;
    }
    levelUp(num) {
        this.trainingLevel += num;
    }

}

let puppy1 = new Puppy ("Jane", "Corgi", 2, 20);
console.log(puppy1);
puppy1.levelUp();
//console.log(puppy1.levelUp());
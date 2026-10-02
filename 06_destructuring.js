// Destructuring - Array
const numbers = [10, 20, 30, 40, 50];
const [first, second, , , ...rest] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", rest);

// Output
// First: 10
// Second: 20
// Rest: [30, 40, 50]


// Destructuring - Object
const person = {
    name: "Bayjid",
    age: 19,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
        street: {
            name: "Main Road",
            number: 25
        }
    },
    hobby: {
        main: "Coding",
        other: "Reading"
    }
};

const { name: myName, age,
    address: { country, street: { number } },
    ...otherInfo
} = person;

console.log("Name:", myName);
console.log("Age:", age);
console.log("Country:", country);
console.log("Street Number:", number);
console.log("Other Info:", otherInfo);


/*
Output:
Name: Bayjid
Age: 19
Country: Bangladesh
Street Number: 25
Other Info: {
    address: {
        city: "Dhaka",
        street: {
            name: "Main Road",
            number: 25
        }
    },
    hobby: {
        main: "Coding",
        other: "Reading"
    }
}
*/
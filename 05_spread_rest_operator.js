// Rest Parameter — বাকি সব arguments একসাথে একটি array হিসেবে রাখে
function myFunc(a, b, ...rest) {
    console.log(arguments);
    console.log(a, b);
    console.log(rest);
}

myFunc(10, 5, 10, 15);

// Output:
// arguments → [10, 5, 10, 15]
// a, b → 10 5
// rest → [10, 15]


/*
    Normally — একই reference থাকায় দুই variable একই array-কে point করে।
    তাই একটিতে change করলে অন্যটিতেও সেই change দেখা যায়।
*/
let number1 = [100, 200, 300, 400];
let number2 = number1;

number2.push(1000);

console.log(number1);
console.log(number2);

// Output:
// number1 → [100, 200, 300, 400, 1000]
// number2 → [100, 200, 300, 400, 1000]


// Spread Operator — নতুন array তৈরি করে, তাই reference আলাদা থাকে
let arr1 = [10, 20, 30, 40, 50];
let arr2 = [60, 70, 80, 90, 100];

let arr3 = [...arr1, ...arr2];

console.log(arr1);
console.log(arr2);
console.log(arr3);

// Output:
// arr1 → [10, 20, 30, 40, 50]
// arr2 → [60, 70, 80, 90, 100]
// arr3 → [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


const person = {
    name: "Bayjid",
    age: 19,
    profession: "Student",
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

const computer = {
    brand: "HP",
    model: "250 G9",
    processor: "Intel Core i5",
    ram: "8GB",
    storage: "512GB SSD",
    isLaptop: true
};


// Spread দিয়ে person এবং computer-এর data একসাথে newObject-এ রাখা হয়েছে
const newObject = {
    ...person,
    computer
};

console.log(newObject);

/*
    Output:
    {
        name: "Bayjid",
        age: 19,
        profession: "Student",
        skills: ["HTML", "CSS", "JavaScript"],
        address: {
            city: "Dhaka",
            country: "Bangladesh"
        },
        computer: {
            brand: "HP",
            model: "250 G9",
            processor: "Intel Core i5",
            ram: "8GB",
            storage: "512GB SSD",
            isLaptop: true
        }
    }
*/
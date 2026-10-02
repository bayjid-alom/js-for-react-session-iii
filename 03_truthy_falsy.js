/**
  Truthy Values:                 Falsy Values:
  - true                         - false
  - Any non-zero number          - 0
  - Any non-empty string         - -0
  - [] (empty array)             - 0n
  - {} (empty object)            - ""
  - function() {}                - null
                                 - undefined
                                 - NaN
**/


if ("Something") {
    console.log("If block triggered!");
}
else {
    console.log("Else block triggered!");
}


let numbers = [10, 20, 30, 40, 50, 60];
let isExist_30 = numbers.find(element => element === 30);
let isExist_300 = numbers.find(element => element === 300);
console.log(isExist_30);  // 30
console.log(isExist_300);  // undefined


if (isExist_300) {
    console.log("Yes, three hundred exist.");
} else {
    console.log("Sorry three hundred not exist!");
}

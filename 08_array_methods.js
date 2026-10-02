const products = [
    {
        id: 1,
        name: "iPhone 15",
        category: "phone",
        brand: "Apple",
        price: 85000,
        inStock: true,
        isExpensive: true,
    },
    {
        id: 2,
        name: "Galaxy S24",
        category: "phone",
        brand: "Samsung",
        price: 78000,
        inStock: true,
        isExpensive: false,
    },
    {
        id: 3,
        name: "Pixel 8",
        category: "phone",
        brand: "Google",
        price: 65000,
        inStock: false,
        isExpensive: false,
    },
    {
        id: 4,
        name: "Redmi Note 13",
        category: "phone",
        brand: "Xiaomi",
        price: 28000,
        inStock: true,
        isExpensive: false,
    },
    {
        id: 5,
        name: "MacBook Air M2",
        category: "laptop",
        brand: "Apple",
        price: 115000,
        inStock: true,
        isExpensive: true,
    },
    {
        id: 6,
        name: "Galaxy Book 4",
        category: "laptop",
        brand: "Samsung",
        price: 95000,
        inStock: false,
        isExpensive: true,
    },
    {
        id: 7,
        name: "IdeaPad Slim 3",
        category: "laptop",
        brand: "Lenovo",
        price: 62000,
        inStock: true,
        isExpensive: false,
    },
    {
        id: 8,
        name: "Aspire 5",
        category: "laptop",
        brand: "Acer",
        price: 55000,
        inStock: true,
        isExpensive: false,
    }
];




// map() method — transforms every item and returns a new array
const newProducts = products.map((pd) => {
    return { ...pd, isExpensive: pd.price >= 80000 };
});
// console.log(newProducts);




// filter() method — returns all items that match the condition
const expensiveProducts = products.filter(pd => pd.price >= 80000);
// console.log(expensiveProducts);

if (expensiveProducts.length === 0) {
    console.log("No expensive products found.");
} else {
    console.log("Expensive products found.");
}




// find() method — returns the first matching item; otherwise, undefined
const expensiveOne = products.find(
    pd => pd.price >= 80000 && pd.category === "laptop"
);
// console.log(expensiveOne);



// Filter expensive laptops, then map them to a new object
// Returns only the id, name, and brand of matching products
const expensiveLaptops = products
    .filter(pd => pd.price >= 80000 && pd.category === "laptop")
    .map(pd => ({
        Id: pd.id,
        Name: pd.name,
        Brand: pd.brand
    }));

console.log(expensiveLaptops);

/*
[
    { Id: 5, Name: "MacBook Air M2", Brand: "Apple" },
    { Id: 6, Name: "Galaxy Book 4", Brand: "Samsung" }
]
*/
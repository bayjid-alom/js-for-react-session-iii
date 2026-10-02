/**
const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            throw new Error("Unknown error!")
        })
        .catch((error) => console.log(error, "Catch block triggered!"))
}

fetchUsers()  **/
// error.message


/*
Error: Unknown error!
    at C:\Projects!\Milestone-05\JS-for-React-Session-iii\07_data_fetching.js:6:19
    at process.processTicksAndRejections (node:internal/process/task_queues:103:5) Catch block triggered!
*/






// to catch error
const fetchUsers = async () => {
    // loading true
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        // throw new Error("Unknown error!")
        const data = await res.json()
        // console.log(data);
    }
    catch (err_or) {
        console.log(err_or.message);
    }
    finally {
        console.log("Finally block always triggered!");
        // loading false
    }
}

fetchUsers()
// console.log('Reference Data Types: Array & Object');

//primitive data types
//string, number, boolean, null, undefined, symbol, bigInt

//reference data types
//Array, Object, Function, Dates, etc

// let mydate = new Date("2020");
// console.log(mydate);

// let myArr = [1, 2, 3, 4, 5, "Umair", false, null, undefined];
// console.log(myArr[5]);

// let users = ['Umair', 'Ali', 'Ahmed'];
// console.log(users.length)


// let users = [];
// console.log(users.length)
// users.push('Umair');
// users.push('Ali');
// users.pop();
// users.pop();
// users.unshift('Admin')
// users.shift()
// console.log(users)

//synchronous - blocking code
//Asynchronous - non-blocking code

let usersData = ['Umair', 'Ali', 'Ahmed', 'Ahsan', 'Hassan', 'Hussain', 'Asim', 'Asad', 'Owais', 'Hamza', 'Khan', 'Zeeshan', 'Uzair', 'Umer', 'Ubaid', 'Abdullah', 'Abdul Rehman', 'Abdul Basit', 'Abdul Wahab', 'Abdul Salam']; //single dimensional array
// let users = document.querySelector('.users');
// console.log(users)
// console.log(users[3]);
// usersData.map((myusers)=>{
    // content.innerHTML += "<li>Hey we are just testing asynchronous behavior</li>";
    // users.innerHTML += `<li>${myusers}</li>`;
    // console.log('Hey we are just testing asynchronous behavior');
    // usersData.map((myusers)=>{
    //     users.innerHTML += `  <div class="user">

    //         <img src="" alt="">
    //         <h2>${myusers}</h2>
    //         <p></p>
    //         <button>Details</button>
    //     </div>`
    // })

    let details = [
        ['Umair', '36', 'Developer', 'Lahore'],
        ['Ali', '28', 'Designer', 'Karachi'],
        ['Ahmed', '30', 'Manager', 'Islamabad'],
        ['Ahsan', '25', 'Engineer', 'Peshawar'],
        ['Hassan', '32', 'Analyst', 'Faisalabad']
];
console.log(details[4][2]);

//Objects in JavaScript

let users = ['Umair', 'Ali', 'Ahmed', 'Ahsan', 'Hassan'];
let ages = [36, 28, 30, 25, 32];
let professions = ['Developer', 'Designer', 'Manager', 'Engineer', 'Analyst'];
let cities = ['Lahore', 'Karachi', 'Islamabad', 'Peshawar', 'Faisalabad'];
let allDetails = [users, ages, professions, cities];
console.log(allDetails[2][3]);


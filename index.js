//#1
// Original Array of elements
const month = ["January", "February", "March", "April", 
               "May", "June", "July", "August", 
               "September", "October", "November", "December"];

// Call function on new array using arrow function.//
const newArray = month.filter(month => month.length > 5);

// Display filtered array//
console.log(newArray);
//output expected: newArray =  "January", "February", "August", "September", "October", "November", "December"//


//#2
// Original array of objects
const students = [
    {status: "freshman", name: "John"}, 
    {status: "freshman", name: "Lisa"},
    {status: "freshman", name: "Sonny"},
    {status: "sophomore", name: "Joe"}, 
    {status: "sophomore", name: "Lana"},
    {status: "sophomore", name: "Sam"},
    {status: "junior", name: "Jane"},
    {status: "junior", name: "Larry"},
    {status: "junior", name: "Sy"},
    {status: "senior", name: "Jill"}, 
    {status: "senior", name: "Lance"},
    {status: "senior", name: "Sydney"},
]

// Call function on new array using arrow function. 
// Display filtered array//
console.log(students.filter(student => student.status === "junior"))
/*expected output: 'student' objects:
{status: "junior", name: "Jane"},
{status: "junior", name: "Larry"},
{status: "junior", name: "Sy"} */
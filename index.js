const month = ["January", "February", "March", "April", 
               "May", "June", "July", "August", 
               "September", "October", "November", "December"];
const newArray = month.filter(month => month.length > 5);
console.log(newArray);


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
console.log(students.filter(student => student.status === "junior"))
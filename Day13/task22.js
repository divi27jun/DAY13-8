
let employees = [
  { id: 1, name: "John", salary: 25000, experience: 2, department: "HR" },
  { id: 2, name: "Alice", salary: 35000, experience: 5, department: "IT" },
  { id: 3, name: "Bob", salary: 45000, experience: 8, department: "Finance" }
];

let students = [
  { name: "Alice", age: 21, grade: "A", marks: 80, city: "Chennai", attendance: 85 },
  { name: "Bob", age: 19, grade: "B", marks: 60, city: "Delhi", attendance: 70 },
  { name: "Charlie", age: 22, grade: "A", marks: 90, city: "Chennai", attendance: 95 }
];

let products = [
  { id: 1, name: "Laptop", price: 60000, category: "Electronics", stock: 5, rating: 4.5 },
  { id: 2, name: "Mobile", price: 20000, category: "Electronics", stock: 0, rating: 4.2 },
  { id: 3, name: "Shoes", price: 3000, category: "Fashion", stock: 10, rating: 3.8 }
];
// 22
let arr = [];
console.log(arr.length === 0);

// 23
let empArr = [{ id: 1, name: "Tom" }, { id: 2, name: "Sam" }];

// 24
employees.forEach(e => console.log(e.id));

// 25
employees[0].name = "Johnny";

// 26
console.log(employees.find(e => e.id === 2));

// 27
employees.forEach(e => e.salary = e.salary || 20000);

// 28
employees.forEach(e => console.log(e.salary));

// 29
console.log(employees.length);

// 30
employees.forEach((e, i) => console.log(i, e));
// 31
console.log(students.map(s => s.name));

// 32
console.log(products.map(p => ({...p, price: p.price * 1.1})));

// 33
console.log(students.filter(s => s.grade === "A"));

// 34
console.log(products.filter(p => p.price < 5000));

// 35
console.log(students.find(s => s.name === "Bob"));

// 36
console.log(products.find(p => p.id === 3));

// 37
students.sort((a,b) => a.age - b.age);

// 38
products.sort((a,b) => b.price - a.price);

// 39
console.log(students);

// 40
console.log(products);
// 41
console.log(products.filter(p => p.category === "Electronics").length);

// 42
console.log(products.reduce((min,p)=> p.price<min.price?p:min));

// 43
console.log(products.reduce((max,p)=> p.price>max.price?p:max));

// 44
console.log(products.some(p => p.stock === 0));

// 45
console.log(students.every(s => s.marks > 35));

// 46
products.forEach(p => p.status = p.stock > 0 ? "Available" : "Out of Stock");

// 47
students.forEach(s => s.result = s.marks > 35 ? "Pass" : "Fail");

// 48
students.forEach(s => console.log(`${s.name} - ${s.result}`));

// 49
console.log(students.map(s => ({ name: s.name, grade: s.grade })));

// 50
console.log(students.filter(s => s.age > 20));
// 51
console.log(students.find(s => s.grade === "B"));

// 52
employees.sort((a,b)=> a.salary - b.salary);

// 53
employees.forEach(e => e.salary += 5000);

// 54
console.log(employees.filter(e => e.salary > 30000));

// 55
console.log(employees.reduce((max,e)=> e.salary>max.salary?e:max));

// 56
let copyStudents = students.map(s => ({...s}));

// 57
students.forEach(s => s.name = s.name.toUpperCase());

// 58
products.forEach(p => p.priceGST = p.price * 1.18);

// 59
products.forEach(p => console.log(`${p.name} costs ₹${p.price}`));

// 60
for (let s of students) console.log(s.name);
// 61
students.forEach(s => s.city = s.city || "Unknown");

// 62
console.log(students.filter(s => s.city === "Chennai"));

// 63
let cityCount = {};
students.forEach(s => cityCount[s.city] = (cityCount[s.city]||0)+1);
console.log(cityCount);

// 64
let gradeGroup = {};
students.forEach(s => {
  if(!gradeGroup[s.grade]) gradeGroup[s.grade] = [];
  gradeGroup[s.grade].push(s);
});
console.log(gradeGroup);

// 65
console.log(students.some(s => s.marks <= 35));

// 66
students.forEach(s => s.attendancePercentage = s.attendance);

// 67
console.log(students.filter(s => s.attendancePercentage > 75));

// 68
console.log(students.reduce((min,s)=> s.attendance<min.attendance?s:min));

// 69
students.sort((a,b)=> a.attendance - b.attendance);

// 70
students.forEach(s => s.scholarship = s.marks > 85);
    

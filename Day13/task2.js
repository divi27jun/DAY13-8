//const data = require("./data.json");

//console.log(data);
//console.log("Name:", data.name);
fetch(".\data.json")
.then(r=>r.json())
.then(data=>{
  console.log(data);
  console.log(data.users[0].name);
});




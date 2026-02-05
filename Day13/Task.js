console.log("Program Started\n");

/* 1 */
setTimeout(() => console.log("1. Hello"), 2000);

/* 2 */
let i = 1;
let int1 = setInterval(() => {
  console.log("2.", i);
  i++;
  if (i > 5) clearInterval(int1);
}, 1000);

/* 3 */
console.log("3. Loading...");
setTimeout(() => console.log("3. Data Loaded"), 3000);

/* 4 */
console.log("4. Start");
setTimeout(() => console.log("4. Async Message"), 0);
console.log("4. End");

/* 5 */
function delay() {
  setTimeout(() => console.log("5. Delay done"), 2000);
}
delay();

/* 6 */
let count = 0;
let int2 = setInterval(() => {
  count++;
  console.log("6. Count:", count);
  if (count === 5) clearInterval(int2);
}, 1000);

/* 7 */
let timeCount = 0;
let clock = setInterval(() => {
  console.log("7.", new Date().toLocaleTimeString());
  if (++timeCount === 5) clearInterval(clock);
}, 1000);

/* 8 Blocking */
console.log("8. Blocking loop start");
for (let j = 0; j < 1e8; j++) {}
console.log("8. Task Completed");

/* Async version */
setTimeout(() => console.log("8. Async version completed"), 0);

/* 9 */
console.log("9. Start");
setTimeout(() => console.log("9. Async message"), 0);
console.log("9. End");

/* 10 Non-blocking */
setTimeout(() => console.log("10. Non-blocking loop done"), 0);

/* 11 */
function executeAfter2Sec(cb) {
  setTimeout(cb, 2000);
}
executeAfter2Sec(() =>
  console.log("11. Callback executed")
);

/* 12 */
executeAfter2Sec(() =>
  console.log("12. File Loaded Successfully")
);

/* 13 */
executeAfter2Sec(() =>
  console.log("13. Login Successful")
);

/* 14 Callback hell */
setTimeout(() => {
  console.log("14. Step 1");
  setTimeout(() => {
    console.log("14. Step 2");
  }, 1000);
}, 1000);

/* 15 Cleaner version */
function step(msg, next) {
  console.log(msg);
  if (next) setTimeout(next, 1000);
}
step("15. Step 1", () => step("15. Step 2"));

/* 16 Passing data */
function fetchData(cb) {
  setTimeout(() => cb("Data received"), 1000);
}
fetchData(data => console.log("16.", data));

/* 17 Success & error */
function checkResult(success, error) {
  let ok = true;
  ok ? success() : error();
}
checkResult(
  () => console.log("17. Success"),
  () => console.log("17. Error")
);

/* 18 */
setTimeout(() =>
  console.log("18. Callback Executed"), 1000);

/* 19 */
let promise1 = new Promise(res =>
  setTimeout(() => res("19. Promise resolved"), 2000)
);

/* 20 */
promise1.then(console.log);

/* 21 */
Promise.reject("21. Promise rejected")
  .catch(console.log);

/* 22 Random */
new Promise((res, rej) =>
  Math.random() > 0.5
    ? res("22. Success")
    : rej("22. Failed")
)
  .then(console.log)
  .catch(console.log);

/* 23 Chain */
Promise.resolve(5)
  .then(n => n * 2)
  .then(n => console.log("23.", n));

/* 25 Callback → Promise */
function delayPromise() {
  return new Promise(res =>
    setTimeout(() => res("25. Done"), 1000)
  );
}
delayPromise().then(console.log);

/* 26 Sequential then */
Promise.resolve(1)
  .then(n => n + 1)
  .then(n => n + 1)
  .then(n => console.log("26.", n));

/* 27 async/await */
async function ex27() {
  let v = await Promise.resolve("27. Async/Await");
  console.log(v);
}
ex27();

/* 28 */
async function waitMsg() {
  await new Promise(res => setTimeout(res, 3000));
  console.log("28. Waited 3 seconds");
}
waitMsg();

/* 29 */
async function errorExample() {
  try {
    throw new Error("29. Error caught");
  } catch (e) {
    console.log(e.message);
  }
}
errorExample();

/* 30–33 Fetch API */
async function fetchDataAPI() {
  try {
    console.log("32. Fetching data...");
    let res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    let data = await res.json();
    console.log("30 & 31:", data.title);
  } catch {
    console.log("33. API Error");
  }
}
fetchDataAPI();

/* 34 */
console.log(
  "34. async/await is cleaner than Promise chains."
);

/* 35 */
async function fetchUsers() {
  let res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  let users = await res.json();
  console.log(
    "35. Users:",
    users.map(u => u.name)
  );
}
fetchUsers();

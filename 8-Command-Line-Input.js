const http=require('http');
const arg=process.argv;// notes ye hmara ek process hai jo argv hota hai jo sab kuch rkhta hai file directory bager asab argv -=argument vector ye cmd se bhreje hue argu;ment ko copy krta hai 
// 2. process kya hai?

// process ek Global Object hai.

// Isme bahut properties hoti hain:

// process
// │
// ├── pid
// ├── cwd()
// ├── env
// ├── argv
// process.argv

// ┌───────────────────────────────────────┐
// │ 0 │ C:\Program Files\nodejs\node.exe │
// process.argv

// [
// 0 ---> Node executable ka path
// 1 ---> Current file ka path
// ]├───────────────────────────────────────┤
// │ 1 │ D:\Node\app.js                   │
// └───────────────────────────────────────┘
// └── exit()
// console.log("---------",arg[7]);
// ! dynamic port kese bnate hai
const port=arg[2];
http.createServer((req,Response)=>{
  
Response.write("hello im kapil");
Response.end('');
}).listen(port);



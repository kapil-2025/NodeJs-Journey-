const http=require('http');
// notes how to import html to uske liye use krte hai hum fs
const fs=require('fs');
// notes jo hume data mila wo readable form mai nhi hota hai to hume use krte hai query string
// Jaise fs ek Core Module (Built-in Module) hai, waise hi querystring bhi Node.js ka Core Module hai.

// const fs = require("fs");
// const querystring = require("querystring");

// Dono ko install karne ki zarurat nahi hoti.
// query string hoti h;ai agr hume Query String kya hoti hai?

// Example URL

// http://localhost:3000/search?name=kapil&age=20&city=Delhi

// Is URL me

// ?name=kapil&age=20&city=Delhi

// ko Query String kehte hain.
// querystring.parse()
// const querystring = require("querystring");

// const data = querystring.parse("name=kapil&age=20");

// console.log(data);

// Output

// {
//   name: "kapil",
//   age: "20"
// }

// Yani

// String
// │
// ▼
// Object
// querystring.stringify()
// const querystring = require("querystring");

// const obj = {
//     name: "kapil",
//     age: 20
// };

// console.log(querystring.stringify(obj));

// Output

// name=kapil&age=20

// Yani

// Object
// │
// ▼
// Query String
const queryString=require('querystring');
http.createServer((req,resp)=>{
 
fs.readFile("11-form-html/form.html",'utf-8',(error,data)=>{
  if(error){
    resp.writeHead(500,{"content-type":"text/plain"});
    resp.end("internal server error");
    return;
  }
resp.writeHead(200,{"content-type": "text/html"})
 if(req.url=="/") {
  resp.write(data);
  }
  else if(req.url=="/submit"){
//     Maan lo Browser me ek Form hai
// <form action="/submit" method="POST">
//     <input name="name">
//     <input name="age">
//     <button>Submit</button>
// </form>

// User fill karta hai

// Name : Kapil
// Age  : 20

// Aur Submit dabata hai.

// Browser server ko bhejta hai

// POST /submit

// name=Kapil&age=20
// Code
// else if(req.url=="/submit"){
// req.url

// Ye check kar raha hai

// "User kis URL par request bhej raha hai?"

// Agar request

// http://localhost:3000/submit

// par aayi hai

// to condition true hogi.

// Diagram

// Browser
//    │
//    │ POST /submit
//    ▼
// Server

// req.url = "/submit"

// "/submit" == "/submit"

// True
// Line 2
// let dataBody = [];
// Ye array kyu banaya?

// Request ka data ek saath nahi aata.

// Wo small-small pieces (chunks) me aata hai.

// Example

// Browser bhejta hai

// name=Kapil&age=20

// Server ko mil sakta hai

// Chunk 1

// name=Ka

// phir

// Chunk 2

// pil&age=

// phir

// Chunk 3

// 20

// Isliye hum ek array banate hain

// let dataBody = [];

// taaki saare chunks store kar sake.

// Initially

// dataBody

// []
// Line 3
// req.on('data',(chunk)=>{
// req.on()

// on() ek Event Listener method hai.

// Syntax

// object.on(eventName, callback)

// Matlab

// Jab ye event hoga tab callback function chalao.

// data event
// req.on("data", ...)

// ka matlab

// Jab bhi request ka ek naya chunk aaye, callback chalao.

// Diagram

// Browser

// name=Kapil&age=20

//           │

// Chunk1
// Chunk2
// Chunk3

//           │

// Server

// req.on("data")
// chunk kya hota hai?

// Chunk matlab

// Data ka ek chhota piece.

// Example

// Original data

// name=Kapil&age=20

// Chunks

// Chunk1

// name=Ka

// Chunk2

// pil&age=

// Chunk3

// 20
// Line
// dataBody.push(chunk);
// push()

// push() Array ka method hai.

// Ye last me value add karta hai.

// Initially

// []

// First chunk

// ["name=Ka"]

// Second chunk

// ["name=Ka","pil&age="]

// Third chunk

// ["name=Ka","pil&age=","20"]
// req.on("end")
// req.on("end",()=>{
// end event

// Ye tab chalta hai jab

// Browser sara data bhej chuka hota hai.

// Diagram

// Chunk1 ✔

// Chunk2 ✔

// Chunk3 ✔

// All Done

// ↓

// end event fire
    let dataBody=[];
    req.on('data',(chunk)=>{
//       "data" ko kisne banaya?

// Ye humne nahi banaya.

// Ye Node.js ke Readable Stream ka predefined event hai.

// Node.js ke request object (req) ke kuch predefined events hote hain:

// req

// │

// ├── data
// ├── end
// ├── error
// ├── close
      dataBody.push(chunk);
    });
    req.on('end',()=>{
      let rawData=Buffer.concat
//       Buffer kya hai? (Node.js)

// Buffer Node.js ka sabse important concept hai.

// Ek line me Definition

// Buffer ek temporary memory area hai jisme Binary Data (Raw Data) store hota hai.

// Real Life Example

// Socho tum ek 1000-page ki book dost ko bhejna chahte ho.

// Internet ek baar me 1000 pages nahi bhejta.

// Wo usko chhote-chhote packets me bhejta hai.

// Book

// ↓

// Packet 1

// ↓

// Packet 2

// ↓

// Packet 3

// ↓

// Packet 4

// Har packet ko Node.js me Buffer kehte hain.
      (dataBody).toString();
      let readAbleData=queryString.parse(rawData)
      console.log(readAbleData);
    })
    resp.write('<h1>Data Submitted</h1>')
  }
 resp.end("test");
})

})
.listen(3240);
//  notes data hume chunk ki form mai milta hai aur usse handle hum bgy req.on se kr skte ahi chunk use krte hai aur for use buffer class mnai store krate hai 
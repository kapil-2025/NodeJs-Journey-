const http=require('http');
const arg=process.argv;// notes ye hmara ek process hai jo argv hota hai jo sab kuch rkhta hai file directory bager asab 
// console.log("---------",arg[7]);
// ! dynamic port kese bnate hai
const port=arg[2];
http.createServer((req,Response)=>{
  
Response.write("hello im kapil");
Response.end('');
}).listen(port);



// ! how to create server
const http=require('http');// iski help se create krte hai server se
http.createServer((request,response)=> {
  const age=29;
  const time=new Date();
  // todo ab dekho bydefault browser smjhta hai  h1 tag ko lkin h2 bagera nhi smjhte uske liye ek promot dena hita hai setHeader
  response.setHeader("Content-Type","text/html");
// notes Step1. response.write("<h2>hello im kapil gupta babbay bhjerrfher hfiehfie3 ebhifheirurfh</h2>"); lkin agar hume ab pura html content bhejna ho to uske liye kya kare and koi variable use krna ho to use <h2>`+variable+`</h2>
response.write(`<html><head><title>coding by kapil gupta</title></head><body><h1>hi im baby uour kpil </h1>
  <h2>`+ Date()+`</h2></body></html>`)
response.end(); // notes server ko end krna must hai jisse hmari current requiest end hojaye
}).listen(4990); 
// ? kya ek file mai 2 server create kr skte hai to uska answer hai yes baby
// ! request ko exit kro to by response.end current request ko end krna pure process end krne k liye process.exit()
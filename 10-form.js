// const http=require('http');
// http.createServer((req,resp)=>{
//   resp.writeHead(200,{"content-type": "text/html"})
//   if(req.url=="/"){
// resp.write(`<form action="/submit" method="post"><input type="text" name="name" placeholder="enter name" ></input><input type="text" name="email" placeholder="enter email" ></input><button>Submit</button></form>`);
//   }l" ></input><button>Submit</button></form>`);
// else{
//   resp.write('<h1>data submitted</h1>');
// }
// resp.end();
// }).listen(3220);
// //  notes status code hota hai 1.200=get request bhejte hai 2.201=jab bhi kuch create krte hai 3.500=error k liye 4.404 for note found page
// //  notes method mai hum agr post use krenge to hume url mai show nhi hota hai kbhi bhi 
// notes iske upar ka code phle pdhna hai ab new
const http=require('http');
// notes how to import html to uske liye use krte hai hum fs
const fs=require('fs');
http.createServer((req,resp)=>{
 
fs.readFile("11-form-html/form.html",'utf-8',(error,data)=>{
  if(error){
    resp.write(500,{"content-type":"text/plain"});
    resp.end("internal server error");
    return;
  }
resp.writeHead(200,{"content-type": "text/html"})
 if(req.url=="/") {
  resp.write(data);
  }
// // resp.write(`<form action="/submit" method="post"><input type="text" name="name" placeholder="enter name" ></input><input type="text" name="email" placeholder="enter emai
  else if(req.url=="/submit"){
    resp.write('<h1>Data Submitted</h1>')
  }
 resp.end("test");
})

})
.listen(3230);
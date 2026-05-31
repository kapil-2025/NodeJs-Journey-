const http=require('http');
http.createServer((req,resp)=>{
// console.log(req.url);
// console.log(req.method);
// console.log(req.headers.host);
console.log(req.method);
if(req.url=="/"){
  resp.write("<h1>Home Page</h1>")
}
else if(req.url=="/login"){
  resp.write("<h1>Login Page</h1>")
}else{
  resp.write("other page");
}
resp.end("hello");
}).listen(7010);
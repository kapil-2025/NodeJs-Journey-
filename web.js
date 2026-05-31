const http=require('http');
const fs=require('fs');
http.createServer((req,resp)=>{
//notes fs.readFile(iske andr 3 parameter pass honge 1.html location 2.uska version like utf-8 and 3. hoga hmara callback function jisme 2 parameter pass hote hai data and error )
fs.readFile('9-web-html/web.html','utf-8',(error,data)=>{
if(error){
  resp.writeHead(500,{"Content-type":"text/plain"});
  resp.write("internal sserver error");
  return resp.end("");
}
resp.writeHead(200,{"Content-type":"text/html"});
resp.write(data);
resp.end("");




})



  
}).listen(5020);
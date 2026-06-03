const http=require('http');
// notes how to import html to uske liye use krte hai hum fs
const fs=require('fs');
// notes jo hume data mila wo readable form mai nhi hota hai to hume use krte hai query string
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
    let dataBody=[];
    req.on('data',(chunk)=>{
      dataBody.push(chunk);
    });
    req.on('end',()=>{
      let rawData=Buffer.concat(dataBody).toString();
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
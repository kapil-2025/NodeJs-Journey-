//3-create-File-From-data
//  notes ab hum data ko 2 ways se file create kr skte hai syrnchonoyus and asyrnchonous way se ye direct file hmare system mai hoti hai create 
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
      
       let createFile="My name is "+ readAbleData.name+ " and my email id is " +readAbleData.email; 
      console.log(createFile);
      // notes method 1 create file by sync to isme only 2 perameter pass hote hai aur jo ayscn wala usme error bghi hita hai
      // fs.writeFileSync("13-text/" + readAbleData.name+ ".txt",createFile);
      // console.log("createFile"); method-1
      // notes asyrnchonous
      fs.writeFile("13-text/" + readAbleData.name+ ".txt",createFile,'utf-8',(error)=>{
        if(error){
          resp.end("internal server error");

        }
        else{
          console.log("file Created")
        }
      })
    })
    resp.write('<h1>Data Submitted</h1>')
  }
 resp.end("test");
})

})
.listen(3600);
//  notes data hume chunk ki form mai milta hai aur usse handle hum bgy req.on se kr skte ahi chunk use krte hai aur for use buffer class mnai store krate hai 
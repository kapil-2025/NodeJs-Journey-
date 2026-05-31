const http=require('http');
const userData=[{
  name:"vipin",age:30, email:"vipin@gmail.com"
},{
  name:"kapil",age:30, email:"kapil@gmail.com"
},
{
  name:"nikhil",age:30, email:"nikhil@gmail.com"
}
]
http.createServer((req,resp)=>{
  resp.setHeader("Content-type","application/json")// notes by default hmari requeest GEt hoti hai
  resp.write(JSON.stringify(userData))
resp.end();
}).listen(6010);
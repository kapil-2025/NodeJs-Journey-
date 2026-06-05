import express from 'express';


const app=express();
const port=3200;
// app.use((req,resp,next)=>{
//   console.log("a new request recieved "+ Date.now());
//   next();
// })



app.get("/",(req,resp)=>{
  console.log('middle');
  
  resp.send('hello,express')
})

app.get('/error',()=>{
  throw new Error('this is error')
})
// hjandle error
app.use((error,req,resp,next)=>{
console.error(error.message);
resp.send('internal server error')

}) .














app.listen(port,()=>{
  console.log((`server is running on http://localhost:${port}`))
  
})

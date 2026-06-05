import express from 'express';


const app=express();
const port=3200;
// app.use((req,resp,next)=>{
//   console.log("a new request recieved "+ Date.now());
//   next();
// })
app.use((req,resp,next)=>{
  console.log('start');
  // req.on ye hmara event listener function hai jo callback function provide krta hai
  resp.on('finish',()=>{
    console.log('end');
    
  })
next();
  
})
app.use("/welcome",(req,resp,next)=>{
  console.log("a new request recieved "+ Date.now());
  next();})
app.get("/",(req,resp)=>{
  console.log('middle');
  
  resp.send('hello,express')
})
app.get("/welcome",(req,resp)=>{
  resp.send("welcomne to express js ")
})














app.listen(port,()=>{
  console.log((`server is running on http://localhost:${port}`))
  
})

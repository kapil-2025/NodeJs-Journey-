import express from 'express';
// ab hum dekhenege ki multiple routes kese kr skte hai
const app=express();
const port=3200;
app.get("/",(req,resp)=>{
  resp.send('hello,express')
})
app.get("/things/:name/:id",(req,resp)=>{
  const {name , id}=req.params
  resp.json({id,name})
})
// catch all invalid routes
app.get("*",(req,resp)=>{
  resp.send("sorry this is invalid ")
})







app.listen(port,()=>{
  console.log((`server is running on http://localhost:${port}`))
  
})
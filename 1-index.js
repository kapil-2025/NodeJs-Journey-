import express from 'express';

import router from './1-route.js';

const app=express();
const port=3200;
app.get("/",(req,resp)=>{
  resp.send('hello,express')
})

// app.get("/user/login",userLogin);
// app.get("/user/signup/",userSignup);
// express.json()=middleware
app.use('/user',router)
app.use(express.json());
app.post("/users",(req,resp)=>{
const {name,email}=req.body;
resp.json({message:`User ${name} with email ${email} created successfully`})
});
app.put('/users/:id',(req,resp)=>{
  const userId=req.params.id;
  const {name,email}=req.body;
  resp.json({message:`user ${userId} updated to ${name},${email}`})
})
app.delete("/users/:id",(req,resp)=>{
  const userId=req.params.id;
  resp.json({message:`user with id ${userId} deleted successfully`})
})
app.listen(port,()=>{
  console.log((`server is running on http://localhost:${port}`))
  
})




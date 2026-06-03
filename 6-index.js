import express from 'express';
const app= express();
app.get("",(req,resp)=>{
  resp.send("home page")
})
app.get("/login",(req,resp)=>{
  resp.send("login page")
})
app.get("/error",(req,resp)=>{
  
  resp.send("error page")
})
// function errorHandling(error,req,resp,next){
//   resp.status(error.status || 500).send("<h1>try after some time</h1>");
// } // ye dono function ek hii baat hai
app.use((error,req,resp,next)=>{
  resp.status(error.status || 500).send("<h1>try after some time</h1>")})
app.listen(3200);
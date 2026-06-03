import express from 'express';
const app =express();
function checkAgeMiddlewareRoute(req,resp,next){
  if(!req.query.age || req.query.age<18){
resp.send("<h1> you are not allowed to use mty website</h1>")
  }

else{
  next();
}}
app.get("/",(req,resp)=>{

  resp.send("<h1> Home Page</h1>")
})

app.get("/login",checkAgeMiddlewareRoute,(req,resp)=>{
  resp.send("<h1>Login page</h1>")
})
app.get("/users",(req,resp)=>{
  resp.send("<h1> users Page</h1>")
})
app.get("/products",(req,resp)=>{
  resp.send("<h1> Products Page</h1>")
})
app.listen(3200);
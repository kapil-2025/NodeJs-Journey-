import express from 'express';
const app=express();
// notes ab mai soch rha hoo yrr ki phle mai yaha chek krlu fir uske baad user ko jane duu ek next parameter hota hai jo chek krta hai ki agar ye sab sahi hai to isko next pr jane do aur hum use function ka bahut use krte hai wo baat yaad rkhna hai hume
function checkRoute(req,resp,next){
  console.log(req.url);
  next();
  
}
app.use(checkRoute);
  

app.get("/",(req,resp)=>{
  resp.send("home page")
});
app.get("/users",(req,resp)=>{
  resp.send("users page")
});
app.get("/products",(req,resp)=>{
  resp.send("product page")
});
app.listen(3200)
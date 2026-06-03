import express from 'express';
const app=express();
// function ageCheck(req,resp,next){
// notes ye hai age chekc ab hum bnaynge ip chek ka
// function ageCheck(req,resp,next){
//   if(!req.query.age || req.query.age<18){
//     resp.end("Alert! you cannot access thuis page")
//   }else{
//     next();
//   }

// }
// app.use(ageCheck);
function ipCheck(req,resp,next){
  //  notes ip nikalne k liye hota resp.socket.remoteAdress
  const ip=req.socket.remoteAddress;
  console.log(ip);
  if(ip.includes( '10.37.150.186')){
    resp.send('alert');

  }else{
  next();}
// notes route middleware wo hota hai jo epecifically bs 2 pr kiya jaa skta hai apply
 }
app.use(ipCheck);
app.get("/",(req,resp)=>{
  resp.send("home page")
});
app.get("/users",(req,resp)=>{
  resp.send("users page")
});
app.get("/products",(req,resp)=>{
  resp.send("product page")
});
app.listen(3200);
// notes agar tumhe ip use krni ho to kese kr skte hao ipconfig getifaddr en0
import { log } from 'console';
import express from 'express';
import path from 'path';
const app =express();
app.use(express.urlencoded({extended:false})) // notes middleware inbuilt
// notes for css
app.use(express.static('5-public'))
app.get("",(req,resp)=>{
  // notes agar absolute path chahiye hota hai to tumhe path import krke usse resolvbe krna higa
  const filePath=path.resolve('6-html/home.html')


  resp.sendFile(filePath) // agar html to path dena hoga hume ab isse
})
app.use(express.urlencoded({extended:false})) // notes middleware inbuilt
app.get("/login",(req,resp)=>{
  resp.send(`<form action="/submit" method="post"><input type="text" placeholder='enter name ' name ="name"></input><input type="text>" placeholder='enter password' name="gmail"></input><button>Login page</button></form>`)
})
app.get("/users",(req,resp)=>{
  resp.send("<h1>user page</h1>")
})
app.post("/submit",(req,resp)=>{
  console.log("user login details are :",req.body);
  resp.send("submit page")
  
  resp.send("<h1>product page</h1>")
})
app.listen(3200);
// notes extrenal middleware iss case mai kya hota hai ye already bne hote hai bs hume khi aur se jaake download krne hote hai 
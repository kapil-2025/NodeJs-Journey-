import express from 'express';
import { searchController, usernameController } from './controller.js';
const app=express();
const port=3200;
app.get("/",(req,resp)=>{
  resp.send('hello,express')
})
// --------------------------aaaaaaaaaaaaaaaaa
// app.get("/about",(req,resp)=>{
//   resp.send('this is about route')
// })
// app.get("/contact",(req,resp)=>{
//   resp.send('this is about contact')
// })
// ----------------------------aaaaaaaaaaaaaaaaaaa
// ---------------------------bbbbbbbbbbbbbbbb dynamic route
// ab humne iski file bnali hai to ab iss function ka koi kaam nhi hai
app.get('/user/:username',usernameController)


// / search?keyword=express
app.get('/search',searchController)

// -------------------------bbbbbbbbbbbbbbbbbbb
// ab hum dekhenege ki seperate files kese bnake unhe export krenge 

app.listen(port,()=>{
  console.log((`server is running on http://localhost:${port}`))
  
})

// notes get=jab hume backend dse koi data chahiye post=jab hume koi data send krna hoi put = jab hume backend pr lkoi data update krna ho delete=jab delkete krna oho to
// notes ab app.method(get,post,put,delete)(handler(isme we send a route root="/","/userrs",function(jab bhi ye route accessed ho to ye function chal jana chahiye )))
// notes dynamic routes aise smjho jese route hota hai uske aage change hona jese hi url mai value dali jaye to change hojaye and defined using parameter name 
// notes query string method mai sbse phle req.query and url mai use krte hai /users?keywords=value;
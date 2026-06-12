import express from 'express';
const app= express();
app.get("/",(req,resp)=>{
  const users=['kapil','himank','karan','pranjal'];
 let data=`<ul>`;
 for(let i=0; i<users.length; i++){
  // console.log(users[i]);
  data=data+`<li><a href="user/${users[i]}">${users[i]}</a></li>`;
  
 }
 data=data+`</ul>`
  resp.send(data);
})
app.get("/user/:name",(req,resp)=>{
  console.log((req.params.name));
  const userNamne=req.params.name;
  resp.send(`this is ${userNamne} profile `)
  
  resp.send("users profile")
})
app.listen(3200);
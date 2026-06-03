// import express from 'express';

// const app=express();
// app.set('view engine','ejs')
// app.get("",(req,resp)=>{
//   resp.render('home',{name:"kapil"})
// })
// app.listen(3200);
// notes step 2
// import express from 'express';
// const app=express();
// app.use(express.urlencoded({extended:false}))
// app.set('view engine','ejs');
// app.get("/add-user",(req,resp)=>{
// resp.render('addUser')
// });
// app.post("/submit-user",(req,resp)=>{
//   console.log(req.body);
  
//   resp.render('submit',req.body)

// })

// app.get("")
// app.listen(3200)
// notes step 3
 import express from 'express';
 const app=express();
 app.use(express.urlencoded({extended:false}))
 app.set('view engine','ejs');
 app.get("/add-user",(req,resp)=>{
 resp.render('addUser')
 });
 app.post("/submit-user",(req,resp)=>{
   console.log(req.body);
   resp.render('submit',req.body)
 }
 );
 app.get("/2user",(req,resp)=>{
  const user2=['anil','kapil','himank','karan','pranjal'];

  resp.render('2user',{user2:user2});
 })
 app.listen(3200)
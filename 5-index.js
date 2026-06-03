import express from 'express';
import morgan from 'morgan';

const app= express();
app.use(morgan('dev'))
app.get("/",(req,resp)=>{
  resp.send("home page");
})
app.listen(3200);
// notes error handling middleware=>route ki error 
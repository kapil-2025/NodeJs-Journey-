import express from 'express';
import { MongoClient } from 'mongodb';

const dbName="school";
const url="mongodb://localhost:27017";
const client = new MongoClient(url);
// client.connect ye ek promise returm krta hai to await and async ka use krte hai

  


const app=express();
app.set('view engine','ejs');
client.connect().then((connection)=>{
 const db= connection.db(dbName);
  app.get("/api",async(req,resp)=>{
    const collection =db.collection("students");
    const students= await collection.find().toArray();
    resp.send(students)
  })
  app.get("/ui",async(req,resp)=>{
    const collection =db.collection("students");
    const students=await collection.find().toArray();
    resp.render('students',{students})
  })
})

// app.get("/",async (req,resp)=>{
//    await client.connect();
//   const db=client.db(dbName);
//   const collection=db.collection("students");
//   const students = await collection.find().toArray(); // ye bnhi promise return krta hai 
//   console.log(students);
//   resp.render('students',{students})
// })
app.listen(3200);
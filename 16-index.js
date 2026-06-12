import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';


const dbName="school";
const url="mongodb://localhost:27017";
const client = new MongoClient(url);
// client.connect ye ek promise returm krta hai to await and async ka use krte hai

  


const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
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
  app.get("/add",(req,resp)=>{
resp.render('add-students')
  })
    app.post("/add-students",async(req,resp)=>{
      console.log(req.body);
      const collection=db.collection("students");
      const result=await collection.insertOne(req.body); // ek baar mai ek data store hoya hai and {req.body} ye objext dtore krega agar inert may krenge 
      console.log(result);
      
      
    resp.send("data saved")
  })
  app.post("/add-student-api",async (req,resp)=>{
    console.log(req.body);
    const {name,age,email}=req.body;
    if(!name || !age || !email){
      resp.send({message:"operation failed",success:false});
      return false;
    }
   
    
    const collection=db.collection("students");
    const result =await collection.insertOne(req.body);
    resp.send({message:"data stored",success:true,result:result})
  })
  app.delete("/delete/:id",async (req,resp)=>{
    console.log(req.params.id);
    const collection =db.collection("students");
    const result =await collection.deleteOne({_id:new ObjectId(req.params.id)})
    if(result){
      resp.send({message:"student data delete ", success:true})
      
    }
    else{
      resp.send({
        message:"after some time try krna ",success:false
      })
    }
  
  })
    app.get("/ui/delete/:id",async (req,resp)=>{
    console.log(req.params.id);
    const collection =db.collection("students");
    const result =await collection.deleteOne({_id:new ObjectId(req.params.id)})
    if(result){
      resp.send("<h1>styudent record delete</h1>")
      
    }
    else{
      resp.send(
     "<h1>styudent record not  delete</h1>"
      )
    }
})
})
app.listen(3200);
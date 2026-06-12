import express from 'express';
import { MongoClient } from 'mongodb';

const dbName="school";
const url="mongodb://localhost:27017";
const client = new MongoClient(url);
// client.connect ye ek promise returm krta hai to await and async ka use krte hai
async function dbConnection(){
  await client.connect();
  const db=client.db(dbName);
  const collection=db.collection("students");
  const result = await collection.find().toArray(); // ye bnhi promise return krta hai 
  console.log(result);
  
}
dbConnection();
const app=express();
app.listen(3200);

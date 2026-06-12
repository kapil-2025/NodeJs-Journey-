import mongoose from "mongoose";
 async  function dbConnection(){
  await mongoose.connect("localhost:27017/school");
  const schema = 
}
dbConnection();

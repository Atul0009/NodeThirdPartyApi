import mongoose from "mongoose";

// Define a MongoDB schema and model for storing API data
const apiDataSchema = new mongoose.Schema({
    
    name: String,
    email: String,
    
  });
  
  const ApiData = mongoose.model('ApiData', apiDataSchema);

  export default ApiData;
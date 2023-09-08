import axios from "axios";
import conf from "./database/db.js"
import ApiData from "./models/model.js";


conf();


// Example of third-party API endpoint
const apiUrl = 'https://api.example.com/data';

async function fetchData() {
  try {
   
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      
      const apiData = response.data;

      // Iterate over the API data and store it in MongoDB
      for (const item of apiData) {
        const dataToStore = new ApiData({
         
          name: item.name,
          email: item.email,
         
        });

        // Save the data to MongoDB
        await dataToStore.save();
      }

      console.log('Data successfully fetched and stored in MongoDB Database.');
    } else {
      console.error(`Failed to fetch data from the API. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  } 
}

// Call the function to fetch and store the data
fetchData();

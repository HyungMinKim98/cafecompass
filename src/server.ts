const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 3001; // Different from React's 3000

const uri = "mongodb+srv://tigerabc0622:5a7F6rW5aIg7jxEG@coffeecompassdb.vkovhu1.mongodb.net/?retryWrites=true&w=majority&appName=coffeecompassDB";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    // Define other routes and operations here
  } catch (e) {
    console.error(e);
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
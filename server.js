import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();
const port = process.env.PORT || 3001; // Different from React's 3000

const uri = "mongodb+srv://tigerabc0622:5a7F6rW5aIg7jxEG@coffeecompassdb.vkovhu1.mongodb.net/?retryWrites=true&w=majority&appName=coffeecompassDB";

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1
});
const express = require('express');
const mongoose = require('mongoose');

// Replace 'yourMongoDBUriHere' with your actual MongoDB URI
const mongoDBUri = 'mongodb://atlas-sql-66016e4ea6e5e617306ffc75-xeiaa.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin';
app.use(express.json()); // This line is necessary for your server to accept JSON in POST requests

mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
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

app.get('/api/cafes', async (req, res) => {
  try {
    const cafes = await CafeModel.find(); // Assuming CafeModel is your Mongoose model for cafes
    res.json(cafes);
  } catch (e) {
    console.error(e);
    res.status(500).send('Server error');
  }
});

app.post('/api/reviews', async (req, res) => {
  try {
    const { userId, cafeId, text, rating, date } = req.body;
    
    const newReview = new ReviewModel({
      userId,
      cafeId,
      text,
      rating,
      date: new Date(date)
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (e) {
    console.error(e);
    res.status(500).send('Server error');
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const { email, password, profileInfo } = req.body;

    // Here, you would typically hash the password before saving.
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      email,
      passwordHash,
      profileInfo,
      favorites: [] // Starts with an empty array of favorites
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (e) {
    console.error(e);
    res.status(500).send('Server error');
  }
});

app.get('/api/cafes/:cafeId/reviews', async (req, res) => {
  try {
    const { cafeId } = req.params;
    const reviews = await ReviewModel.find({ cafeId });
    res.json(reviews);
  } catch (e) {
    console.error(e);
    res.status(500).send('Server error');
  }
});
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://prashantokk:D0V00dTE2itAY2wA@cluster25.s3hll.mongodb.net/?retryWrites=true&w=majority
', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.log('MongoDB connection error:', err);
});

app.get('/test-db', (req, res) => {
  res.send('Backend is running, and MongoDB is connected!');
});

app.listen(port, () => console.log(`Server running on port ${port}`));

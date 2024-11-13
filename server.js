const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://prashantokk:D0V00dTE2itAY2wA@cluster25.s3hll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster25', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.log('MongoDB connection error: ', err);
});

// Basic routes for your API (example)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Server running on port ${port}`));

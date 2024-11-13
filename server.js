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

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String
});

// Create Product Model
const Product = mongoose.model('Product', productSchema);

// Route to add a product
app.post('/admin/add-product', (req, res) => {
  const { name, description, price, image } = req.body;
  const newProduct = new Product({ name, description, price, image });

  newProduct.save()
    .then(product => res.json({ message: "Product added", product }))
    .catch(err => res.status(400).json({ message: "Error adding product", error: err }));
});

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Server running on port ${port}`));

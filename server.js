const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected")).catch(err => console.log(err));

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String
});

const Product = mongoose.model('Product', productSchema);

app.post('/admin/add-product', (req, res) => {
  const { name, description, price, image } = req.body;
  const newProduct = new Product({ name, description, price, image });
  newProduct.save()
    .then(product => res.json({ message: "Product added", product }))
    .catch(err => res.status(400).json({ message: "Error adding product", error: err }));
});

app.get('/products', (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json({ message: "Error fetching products", error: err }));
});

app.listen(port, () => console.log(`Server running on port ${port}`));

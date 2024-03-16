const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3001; // or any other port you prefer

app.use(cors());

const uri = "mongodb+srv://swastickkumardey:0AP373aW8ZJTL8Eo@luzesole.jwsnwlq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/adidas-products', async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("luzesole").collection("adidas");
    const products = await collection.find({}).toArray();
    res.json(products);
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

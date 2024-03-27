
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/router");
const port = process.env.PORT


app.use(cors());
app.options('*', cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/generate",router)
app.use('/knowlyets', express.static('./build/gif'));
app.use('/dknowlyets', express.static('./dummygif'));

app.get('/', (req, res) => {
  res.send('Server is Running!')
})

app.listen(port || 5000, '0.0.0.0', () => {
    console.log("Server is running.",port);
  });


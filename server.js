const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 

const routes = require("./router/MongoRouter")


require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoBD connected"))
.catch((err) => console.log(err));

app.use("/api", routes)
app.listen(PORT, () => console.log(`Port is running on ${PORT}`))
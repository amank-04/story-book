const mongoose = require("mongoose");

const connectDB = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DataBase..."))
  .catch((err) => console.error(err));

module.exports = connectDB;

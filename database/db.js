const mongoose = require("mongoose");
const config = require("../utils/config");

mongoose.set("strictQuery", false);

const connectToDatabse = async () => {
  mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((error) => {
      console.log(`error connecting to mongodb: ${error.message}`);
    });
};

module.exports = connectToDatabse;

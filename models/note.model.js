const mongoose = require("mongoose");
const config = require("../utils/config");

mongoose.set("strictQuery", false);

mongoose
  .connect(config.MONGODB_URI)
  .then((res) => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log(`error connecting to mongodb: ${error.message}`);
  });

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Note", noteSchema);

const express = require("express");
const cors = require("cors");
const notesRouter = require("./controllers/notes.controller");

const app = express();

const errorHandler = (error, req, res, next) => {
  console.log(error);

  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

app.use("/api/notes", notesRouter);

app.use(errorHandler);

module.exports = app;

const express = require("express");
const cors = require("cors");
const notesRouter = require("./controllers/notes.controller");

// middlewares
const errorHandler = require("./middlewares/errorHandler");
const requestLogger = require("./middlewares/requestLogger");
const unknownEndpoint = require("./middlewares/unknownEndpoint");

const app = express();

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use(requestLogger);

app.use("/api/notes", notesRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;

const express = require("express");
const cors = require("cors");
const connectToDatabse = require("./database/db");
const notesRouter = require("./routes/notes.route");
const usersRouter = require("./routes/users.route");

// middlewares
const errorHandler = require("./middlewares/errorHandler");
const requestLogger = require("./middlewares/requestLogger");
const unknownEndpoint = require("./middlewares/unknownEndpoint");

const app = express();
connectToDatabse();

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use(requestLogger);

app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;

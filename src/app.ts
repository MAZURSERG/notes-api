import type { Request, Response } from "express";

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const noteRouter = require("./routes/note.routes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use("/api", noteRouter);
app.use(errorHandler);

module.exports = { app };
export {};

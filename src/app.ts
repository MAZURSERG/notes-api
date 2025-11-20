import type { Request, Response } from "express";

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger");

const noteRouter = require("./routes/note.routes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

// Максимально простой и permissive CORS
app.use(cors());
// app.options("/*", cors());

app.use(morgan("dev"));
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Swagger — до основных роутов и до errorHandler
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", noteRouter);
app.use(errorHandler);

module.exports = { app };
export {};

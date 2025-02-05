import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import morgan from "morgan";
import dotenv from "dotenv";
import { db } from "./lib/db.js";
import { createClientRouter } from "./routes/create_client.js";
import { createBankerRouter } from "./routes/create_banker.js";
import { connectBankerToClientRouter } from "./routes/connect_banker_to_client.js";
import { createTransactionRouter } from "./routes/create_transaction.js";
import { deleteClientRouter } from "./routes/delete_client.js";
import { fetchClientsRouter } from "./routes/fetch_clients.js";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " * ", credentials: true }));
app.use(morgan("dev"));

app.use(createClientRouter);
app.use(createBankerRouter);
app.use(connectBankerToClientRouter);
app.use(createTransactionRouter);
app.use(deleteClientRouter);
app.use(fetchClientsRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// your routes here

app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log('--------------------------\n');
  console.log(`Server is working on Port:${port}  in ${envMode} Mode.`);
  console.log(`\n--------------------------`);
  
  db.initialize()
    .then(() => {
      console.log("DB CONTECTED");
    })
    .catch((err) => {
      console.log("DB FAILED", err);
    });
});

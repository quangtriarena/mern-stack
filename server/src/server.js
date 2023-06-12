import "./helpers/loadEnv.js";
import express from "express";
import AuthRoutes from "./routes/auth/index.js";
import PostgresSequelize from "./connector/postgres/index.js";

const app = express();
const PORT = 3002;

PostgresSequelize.authenticate();

/**
 * This route testing nodejs running
 */
app.get("/", (req, res) => {
  /**
   * khi server request đúng với endpoint, callback function sẽ được chạy
   */
  res.send("Welcome to express");
});

/**
 * This middleware router
 */
app.use("/api/v1", AuthRoutes);

/**
 * khởi tạo webserver với PORT 3002
 */
app.listen(PORT, (req, res) => {
  console.log("app listening on port " + PORT);
});

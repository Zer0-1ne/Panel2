import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import { registerUser, loginUser } from "./api/users/auth.js";

const app = express();
const PORT = 3000;

// Load environment variables from .env file
dotenv.config();

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Middleware to parse JSON requests
app.use(express.json());

// Mount authentication routes
app.post("/auth/register", registerUser);
app.post("/auth/login", loginUser);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

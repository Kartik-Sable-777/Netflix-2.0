// ✅ Step 1: Imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import databaseConnection from "./utils/database.js";
import userRoute from "./routes/userRoute.js";

// ✅ Step 2: Initialize environment variables
dotenv.config({
  path: ".env",
});

// ✅ Step 3: Connect MongoDB
databaseConnection();

// ✅ Step 4: Initialize Express
const app = express();

// ✅ Step 5: Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Render automatically provides its own domain — so we handle both localhost and production
const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL, // e.g. https://netflix-frontend.onrender.com
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ✅ Step 6: API Routes
app.use("/api/v1/user", userRoute);

// ✅ Step 7: Root route
app.get("/", (req, res) => {
  res.send("Backend is running successfully ✅");
});

// ✅ Step 8: Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

// ✅ Step 1: Imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import databaseConnection from "./utils/database.js";
import userRoute from "./routes/userRoute.js";

// ✅ Step 2: Load environment variables
dotenv.config({ path: ".env" });

// ✅ Step 3: Connect MongoDB
databaseConnection();

// ✅ Step 4: Initialize Express
const app = express();

// ✅ Step 5: Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// ✅ Step 6: Configure CORS
// Frontend URLs for both local and production
const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL || "https://netflix-2-0-ui.onrender.com", // fallback
];

console.log("✅ Allowed origins:", allowedOrigins);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      console.log("❌ Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true, // Allow cookies & tokens
  })
);

// ✅ Step 7: API Routes
app.use("/api/v1/user", userRoute);

// ✅ Step 8: Root route (for testing Render)
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully on Render!");
});

// ✅ Step 9: Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
